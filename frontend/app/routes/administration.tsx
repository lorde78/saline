import React from "react";
import TagList from "../components/taglist";
import administration from "~/styles/administration.css";

export default function Administration() {
    return (
        <div>
            <h1>Administration</h1>
            <div>Bienvenue dans la partie administration des labels</div>
            <TagList />
        </div>
    );
}