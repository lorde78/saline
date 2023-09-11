import {useLocation} from "@remix-run/react";

export default function getIdFromUrl() {
    const location = useLocation()

    let path = location.pathname
    let newPath = path.split("/")

    let pathArray = newPath.pop()
    let id = newPath.pop()

    // @ts-ignore
    return Number(id)
}