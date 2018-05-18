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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "18fadec492e7321dcfd2f990c9757efa"
  },
  {
    "url": "affix/zh-cn.html",
    "revision": "c180099a35fedf474ad635390a4b6590"
  },
  {
    "url": "assets/css/0.styles.8a64010a.css",
    "revision": "22500884240c19e25d76a0ec092bc93f"
  },
  {
    "url": "assets/img/iconfont.f2cf41f1.svg",
    "revision": "f2cf41f18ab834b245abc5b76e379daf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.29993394.js",
    "revision": "16bc5ad9b6f521a46a23a45b42bd38e4"
  },
  {
    "url": "assets/js/2.771b6b39.js",
    "revision": "28d73ba76e139c01a07acb066117cabc"
  },
  {
    "url": "assets/js/3.393f291f.js",
    "revision": "04df2f37e491f0610f7a71a455dc4ec1"
  },
  {
    "url": "assets/js/4.845f797c.js",
    "revision": "c78fa8b9bc9cf522fdcca9501b9a02aa"
  },
  {
    "url": "assets/js/5.40775a44.js",
    "revision": "63be61c00e8f3eb3be38435d9f950652"
  },
  {
    "url": "assets/js/6.adc98e6d.js",
    "revision": "006b5acd73040460bf5b47d398c8fa0f"
  },
  {
    "url": "assets/js/7.f73ce85c.js",
    "revision": "0df85dcb9109ef0f9bb27fdf81efc77c"
  },
  {
    "url": "assets/js/8.97e368ca.js",
    "revision": "0020ff8ae72feec4e7c5cc1d5f940944"
  },
  {
    "url": "assets/js/app.e3912556.js",
    "revision": "0f8a456901794fa55ad0862fc62a8732"
  },
  {
    "url": "breadcrumb/zh-cn.html",
    "revision": "c9401218a98241a832c186f6ae2c00fa"
  },
  {
    "url": "button/zh-cn.html",
    "revision": "927ad6d8540dc8c0dfdc1a0850007e2c"
  },
  {
    "url": "grid/zh-cn.html",
    "revision": "324701bd301cdfcbf8613d7e757556a9"
  },
  {
    "url": "icon/zh-cn.html",
    "revision": "96cb2c50d27a6cabeafb29124339ab0b"
  },
  {
    "url": "index.html",
    "revision": "7e5cbf5966c77c3494a31bd9e6dfda66"
  },
  {
    "url": "loadbar/zh-cn.html",
    "revision": "3d8ea5e733520fd6b29948bc48849c4d"
  },
  {
    "url": "logo.png",
    "revision": "a53179ca13039218c56cb6bce42e3aa6"
  },
  {
    "url": "rate/zh-cn.html",
    "revision": "06ba655f8d49c478d0fb1c89a4698edc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
