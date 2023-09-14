/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  serverModuleFormat: "cjs",
  appDirectory: "app",
  future: {
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  devServerPort: 8002,
  serverDependenciesToBundle: [
    'swiper',
    'swiper/react',
    'swiper/react/swiper-react.js',
    'ssr-window',
    'ssr-window/ssr-window.esm.js',
    'dom7',
  ],
};
