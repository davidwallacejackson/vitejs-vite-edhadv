import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const registration = navigator.serviceWorker
  .register("/sw.js", { scope: "/sw" })
  .then((registration) => {
    fetch("/sw/foo");
    fetch("https://google.com/");
  });

// you'll see fetch events for both /sw/foo and https://google.com/ in the console
// (though of course the actual fetches will fail)

// switch to /sw/sw.js and you see neither (I'd expect /sw/foo at least to remain)

// alternately, switch to /sw.js with {scope: '/sw'} and you still see neither

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
