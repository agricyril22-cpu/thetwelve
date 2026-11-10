/* THE TWELVE · service worker : l'application s'ouvre même sans Internet, et se met à jour toute seule */
const V='5.0.4',CACHE='thetwelve-'+V,SHELL=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).catch(()=>{}))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('thetwelve-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('message',e=>{if(e.data==='skip')self.skipWaiting()});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;
  if(/\/(data|souvenirs)\//.test(u.pathname)||u.searchParams.has('t'))return; /* données : toujours en direct */
  const page=r.mode==='navigate'||/\/(index\.html)?$/.test(u.pathname);
  if(page){e.respondWith((async()=>{try{const ctl=new AbortController();const to=setTimeout(()=>ctl.abort(),6000);const n=await fetch(r,{signal:ctl.signal});clearTimeout(to);if(n.ok){const c=await caches.open(CACHE);c.put('./index.html',n.clone())}return n}
    catch(x){return (await caches.match('./index.html'))||(await caches.match('./'))||Response.error()}})());return}
  if(/\/icons\/|manifest\.webmanifest$/.test(u.pathname))e.respondWith(caches.match(r).then(c=>c||fetch(r)))});
