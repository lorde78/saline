import { cssBundleHref } from "@remix-run/css-bundle";
import { Meta, Links, Scripts, useLoaderData } from '@remix-run/react';
import type { LinksFunction } from "@remix-run/node";
import {
	LiveReload,
	Outlet,
	ScrollRestoration,
} from "@remix-run/react";
import banner from ".public/assets/images/1000x1500-pour-site12.png";

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
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<img src={banner} alt="" />
				<LiveReload />
			</body>
		</html>
	);
}
