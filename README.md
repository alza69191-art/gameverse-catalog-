# GameVerse Catalog

خدمة مستقلة للمواقع والتطبيقات ومتجر الألعاب، مبنية باستخدام Next.js 15 وTypeScript.

## التشغيل
`npm install`
`npm run dev`

## Render
- Runtime: Node
- Build: `npm install && npm run build`
- Start: `npm run start`
- Region: Oregon

## قاعدة البيانات
تستخدم الخدمة TiDB Cloud (MySQL compatible). أضف المتغيرات التالية إلى بيئة Render:
- `TIDB_HOST=gateway01.us-west-2.prod.aws.tidbcloud.com`
- `TIDB_PORT=4000`
- `TIDB_USER`
- `TIDB_PASSWORD`
- `TIDB_DATABASE=gameverse`
- `TIDB_SSL=true`

لا تضع بيانات الاتصال السرية داخل ملفات GitHub أو كود الواجهة. قاعدة البيانات مشتركة مع منظومة GameVerse، ويجب استخدام جداول/واجهات مستقلة للكتالوج وعدم إجراء تغييرات تدميرية على جداول الخدمات الأخرى.

## الحالة
تم إنشاء الهيكل والواجهات الأساسية. ربط البيانات الفعلي يحتاج إضافة بيانات اعتماد TiDB والتحقق من مخطط الجداول قبل تفعيل الاستعلامات.