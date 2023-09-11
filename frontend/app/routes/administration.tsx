import React from "react";
import TagList from "../components/taglist";
import administration from "~/styles/administration.css";

export function links() {
    return [
        { rel: 'stylesheet', href: administration }
    ]
}

export default function Administration() {
    return (
        <div className="administration_container">
            <h1>Administration</h1>
            <div>Bienvenue dans la partie administration des labels</div>
            <TagList />
        </div>
    );
}