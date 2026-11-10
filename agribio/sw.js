/* AgriBio Invest · service worker : l'application s'ouvre même sans Internet */
const V='1.0.0',CACHE='agribio-'+V,SHELL=['./','./index.html','./manifest.webmanifest','./icons/icon.svg','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).catch(()=>{}));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('agribio-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;
  if(r.mode==='navigate'){e.respondWith(fetch(r).then(n=>{if(n.ok){const c=n.clone();caches.open(CACHE).then(x=>x.put('./index.html',c))}return n}).catch(()=>caches.match('./index.html')));return}
  e.respondWith(caches.match(r).then(c=>c||fetch(r)))});
