/* AgriBio Invest · service worker autonome : l'application s'ouvre et fonctionne sans Internet */
const V='1.1.0',CACHE='agribio-'+V,FONTS='agribio-fonts';
const SHELL=['./','./index.html','./manifest.webmanifest','./icons/icon.svg','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-192.png','./icons/icon-maskable-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).catch(()=>{}));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('agribio-')&&k!==CACHE&&k!==FONTS).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const u=new URL(r.url);
  /* polices : mises en cache à la première ouverture, puis disponibles hors ligne */
  if(u.hostname==='fonts.googleapis.com'||u.hostname==='fonts.gstatic.com'){
    e.respondWith(caches.open(FONTS).then(c=>c.match(r).then(hit=>hit||fetch(r).then(n=>{c.put(r,n.clone());return n}).catch(()=>new Response('',{status:503})))));return}
  if(u.origin!==location.origin)return;
  /* page : réseau d'abord (pour les mises à jour), sinon la copie locale */
  if(r.mode==='navigate'){
    e.respondWith(fetch(r).then(n=>{if(n.ok){const c=n.clone();caches.open(CACHE).then(x=>x.put('./index.html',c))}return n}).catch(()=>caches.match('./index.html').then(x=>x||caches.match('./'))));return}
  e.respondWith(caches.match(r,{ignoreSearch:true}).then(c=>c||fetch(r).then(n=>{if(n.ok){const cl=n.clone();caches.open(CACHE).then(x=>x.put(r,cl))}return n})));
});
