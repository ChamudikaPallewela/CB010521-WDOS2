//add all URLs to cache when installed
self.addEventListener("install", function(event){
   console.log("Service worker installed");
});
//On activate update the cache with the new version and clean out old caches
self.addEventListener('activate', function(event) {
  console.log("Service worker is active!");
});
//The fetch event handler
self.addEventListener('fetch',function(event){
   console.log("Fetch event",event);
});