import { NextRequest, NextResponse } from "next/server";
import { getDbPool } from "@/lib/db";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export async function GET(request: NextRequest) {
  const type = (request.nextUrl.searchParams.get("type") || "").slice(0, 32);
  const q = (request.nextUrl.searchParams.get("q") || "").trim().slice(0, 100);
  const limit = Math.min(100, Math.max(1, Number(request.nextUrl.searchParams.get("limit") || 30)));
  try {
    const clauses = ["status='approved'"];
    const params: (string|number)[] = [];
    if (type) { clauses.push("item_type=?"); params.push(type); }
    if (q) { clauses.push("(title LIKE ? OR description LIKE ?)"); params.push("%"+q+"%", "%"+q+"%"); }
    params.push(limit);
    const [rows] = await getDbPool().execute(
      "SELECT item_type AS type,title,slug,description,platform,source_url AS sourceUrl,download_url AS downloadUrl,license,license_url AS licenseUrl FROM catalog_submissions WHERE "+clauses.join(" AND ")+" ORDER BY title LIMIT ?",
      params
    );
    return NextResponse.json({ ok: true, source: "tidb", items: rows });
  } catch (error) {
    console.error("Catalog database query failed", error);
    return NextResponse.json({ ok: false, source: "tidb", items: [], error: "Catalog database is not connected or catalog schema is not ready." }, { status: 503 });
  }
}