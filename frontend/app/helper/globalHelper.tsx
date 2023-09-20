import { LoaderFunction } from "@remix-run/node"
import {useEffect, useContext, useState} from "react"
import { signinContext } from "~/context/signinContext"
import useGetCookies from "~/hook/useGetCookies"
import useGetCurrentUserId from "~/hook/useGetCurrentUserId";
import {useNavigate} from "react-router-dom";
import {isLogged} from "~/helper/isLogged";

export function useGlobalEffect(isFrom:string) {
    // @ts-ignore
    const [signin,setSignin] = useContext(signinContext)

    useEffect(() => {
        const getSignin = async () => {
            let cookies = useGetCookies()
            if (Object.keys(cookies).includes("SalineToken")) {
                //@ts-ignore
                await setSignin(cookies.SalineToken)
            }
        }

        getSignin()
    }, [signin]);


    isLogged(isFrom,signin);
}