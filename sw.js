// Service worker بسيط — يخلي التطبيق قابل للتثبيت على الجوال.
// ما بيعمل تخزين مؤقت للدردشة (لازم تبقى محدثة لحظيًا)، بس يفعّل خاصية "أضف للشاشة الرئيسية".
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  self.clients.claim();
});
self.addEventListener('fetch', (event) => {
  // مرّر كل الطلبات عادي بدون تخزين مؤقت، عشان الدردشة تضل لحظية
  event.respondWith(fetch(event.request));
});
