import {useLocation} from "@remix-run/react";

export default function getIdFromUrl(numberUndoPage) {
    const location = useLocation()

    let path = location.pathname
    let newPath = path.split("/")

    for (let undoPage = numberUndoPage; undoPage > 0; undoPage--) {
        let pathArray = newPath.pop()
    }
    let id = newPath.pop()

    // @ts-ignore
    return Number(id)
}