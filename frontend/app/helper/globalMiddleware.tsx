import { LoaderFunction } from "@remix-run/node"
import { useEffect, useContext } from "react"
import { signinContext } from "~/context/signinContext"
import useGetCookies from "~/hook/useGetCookies"

export function useGlobalEffect() {
    // @ts-ignore
    const [signin,setSignin] = useContext(signinContext)

    console.log(signin,"yo")
    useEffect(() => {
        let cookies = useGetCookies()
        if (Object.keys(cookies).includes("SalineToken")) {
            setSignin(cookies.SalineToken)
        }
        console.log(signin,"hey")
    }), [signin]
}