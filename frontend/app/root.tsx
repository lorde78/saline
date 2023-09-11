import { cssBundleHref } from "@remix-run/css-bundle";
import { Meta, Links, Scripts } from '@remix-run/react';
import Header from './components/header';
import Footer from './components/footer';
import type { LinksFunction } from "@remix-run/node";
import {
    LiveReload,
    Outlet,
    ScrollRestoration,
} from "@remix-run/react";
import { useState, useEffect } from "react";
import { signinContext } from "./context/signinContext";
import { registerContext } from "./context/registerContext";
import {useGetJWT, useGlobalEffect} from "~/helper/globalHelper";
import useGetCookies from "~/hook/useGetCookies";
// import { I18nextProvider } from 'react-i18next';
// import i18n from './i18n.ts';

export const links: LinksFunction = () => [
    ...(cssBundleHref ? [{rel: "stylesheet", href: cssBundleHref}] : []),
];

export default function App() {
	const [signin,setSignin] = useState<string>();
	const [registerData,setRegister] = useState<any>([]);

	return (
		<registerContext.Provider value ={[registerData,setRegister]}>
			<signinContext.Provider value={[signin,setSignin]}>
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
						<LiveReload port={8002}/>
					</body>
				</html>
			</signinContext.Provider>
		</registerContext.Provider>
	);
}
