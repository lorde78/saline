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
import useGetCookies from "~/hook/useGetCookies";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Loader from "~/kits/loader";
// import { I18nextProvider } from 'react-i18next';
// import i18n from './i18n.ts';

export const links: LinksFunction = () => [
    ...(cssBundleHref ? [{rel: "stylesheet", href: cssBundleHref}] : []),
];

const stripePromise = loadStripe('pk_test_51JKIu7BzGTnzBgyWsw6NG5pnmeUadeBMsd3Md8goHk3g99DC1QX2AruZ0dByisAdUEoZr6nkk5ZtYUKyAUeA1A0S00CFFdwkZk');

export default function App() {
	const [signin,setSignin] = useState<string>();
	const [registerData,setRegister] = useState<any>([]);
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		if (document.readyState === "complete") {
			setTimeout(() => { setLoader(true)},1000)
		} else {
			window.onload = () => {
				setTimeout(() => { setLoader(true)},1000)
			};
		}
	}, []);

	return (
		<registerContext.Provider value ={[registerData,setRegister]}>
			<signinContext.Provider value={[signin,setSignin]}>
			<Elements stripe={stripePromise}>
				<html lang="en">
					<head>
						<meta charSet="utf-8" />
						<meta name="viewport" content="width=device-width,initial-scale=1" />
						<Meta />
						<Links />
					</head>
					<body>
						{loader ? <></>  : <Loader/> }
						<Outlet />
						<ScrollRestoration />
						<Scripts />
						<LiveReload port={8002}/>
					</body>
				</html>
				</Elements>
			</signinContext.Provider>
		</registerContext.Provider>
	);
}
