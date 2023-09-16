import { LoaderFunction } from "@remix-run/node"
import {useEffect, useContext, useState} from "react"
import { signinContext } from "~/context/signinContext"
import useGetCookies from "~/hook/useGetCookies"
import useGetCurrentUserId from "~/hook/useGetCurrentUserId";
import {useNavigate} from "react-router-dom";

export function useGlobalEffect() {
    // @ts-ignore
    const [signin,setSignin] = useContext(signinContext)

    useEffect(() => {
        let cookies = useGetCookies()
        if (Object.keys(cookies).includes("SalineToken")) {
            //@ts-ignore
            setSignin(cookies.SalineToken)
        }
    }, [signin]);
}