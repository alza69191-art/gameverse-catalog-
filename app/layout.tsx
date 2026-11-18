import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "GameVerse | اكتشف عالم الألعاب والتطبيقات",
  description: "دليل GameVerse للمواقع والتطبيقات والألعاب ومصادرها الرسمية.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}