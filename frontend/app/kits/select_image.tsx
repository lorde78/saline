import 'remixicon/fonts/remixicon.css'
import {useEffect, useState} from "react";

class props {
    setValue: any;
    defaultUrl?: string;
}

export default function Select_image({setValue, defaultUrl}:props) {
    const showPreview = (input:any) => {
        let url = null;
        if (typeof input === "string") {
            url = input;
        } else {
            url = URL.createObjectURL(input);
        }
        var preview = document.getElementById("image_preview");
        // @ts-ignore
        preview.src = url;
        // @ts-ignore
        preview.style.display = "block";
        setValue(input);
    }

    useEffect(() => {
        if(defaultUrl) {
            showPreview(defaultUrl);
        }
    }, [defaultUrl]);

    return (
        <div className={"select_image_container"}>
            <label htmlFor="images" className="drop_container">
                 <img id={"image_preview"} src={defaultUrl || ""} />
                <input type="file" id="images" accept="image/*" onChange={(event: object) => {
                    // @ts-ignore
                    showPreview(event.target.files[0])
                }}/>
                <i className="ri-image-add-line"></i>
            </label>
        </div>
    )
}