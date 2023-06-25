import { cssBundleHref } from "@remix-run/css-bundle";
import { Meta, Links, Scripts, useLoaderData } from '@remix-run/react';
import Header from './components/header/header';
import type { LinksFunction } from "@remix-run/node";
import {
	LiveReload,
	Outlet,
	ScrollRestoration,
} from "@remix-run/react";

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
			</body>
		</html>
	);
}
