import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
// import { I18nextProvider } from 'react-i18next';
// import i18n from './i18n.ts';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* <I18nextProvider i18n={i18n}> */}
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        {/* </I18nextProvider> */}
      </body>
    </html>
  );
}
