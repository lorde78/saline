import {useLocation} from "@remix-run/react";

export default function editLink(numberUndoPage) {
    let location = useLocation()

    let path = location.pathname
    let newPath = path.split("/")

    for (let undoPage = numberUndoPage; undoPage > 0; undoPage--) {
        let pathArray = newPath.pop()
    }

    // @ts-ignore
    return newPath.toString().replaceAll(",", "/")
}