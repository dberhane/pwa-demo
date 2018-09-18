/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-d3ecbfa34e408e5c8d14.js"
  },
  {
    "url": "app-712f122ca2b5a7678e8b.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-028b19aef758163ddf02.js"
  },
  {
    "url": "index.html",
    "revision": "4b83f797f3b24f188794054181431805"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "8fc1b5d2414fac9cd8ab73a71d9cb617"
  },
  {
    "url": "0.b8d9a8d15a7b631d0fe9.css"
  },
  {
    "url": "component---src-templates-index-js.6d66cbd84d577cb46acc.css"
  },
  {
    "url": "component---src-templates-index-js-7cc41185168a995ff798.js"
  },
  {
    "url": "0-07e81c1be23695f2f5f5.js"
  },
  {
    "url": "static/d/948/path---index-6a9-4A6TBtV8l2TqycyosCJ6oRuzPHg.json",
    "revision": "d74fa5dc65c8995c4cf327bf64096462"
  },
  {
    "url": "component---src-pages-404-js.6d66cbd84d577cb46acc.css"
  },
  {
    "url": "component---src-pages-404-js-1a7c45811938d4df21c9.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/84/path---offline-plugin-app-shell-fallback-549-4b4-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "5a4a5c9855fc349a7707fc2e354e858c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/pwa-demo/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});