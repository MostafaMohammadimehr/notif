if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
  Notification.requestPermission().then(permission => {
    console.log('Notification permission:', permission);
  });
}
self.addEventListener('install', event => {
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  clients.claim();
});
