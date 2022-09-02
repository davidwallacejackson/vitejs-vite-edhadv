self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
  console.log("JS retry proxy active");
});

self.addEventListener("fetch", (event) => {
  console.log("fetch event", event.request.url);
});
