import { cssBundleHref } from "@remix-run/css-bundle";
import { Meta, Links, Scripts, useLoaderData } from '@remix-run/react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import type { LinksFunction } from "@remix-run/node";
import {
	LiveReload,
	Outlet,
	ScrollRestoration,
} from "@remix-run/react";
// import { I18nextProvider } from 'react-i18next';
// import i18n from './i18n.ts';

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
	console.log("App");
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<Header title={"blabla"} />
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
				{/* <Footer /> */}
			</body>
		</html>
	);
}
