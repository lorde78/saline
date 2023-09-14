import 'remixicon/fonts/remixicon.css'
import {useState} from "react";

class props {
    setValue: any;
}

export default function Select_image({setValue}:props) {

    const showPreview = (input:any) => {
        var url = URL.createObjectURL(input);
        console.log(' image : ' + url)
        var preview = document.getElementById("image_preview");
        // @ts-ignore
        preview.src = url;
        // @ts-ignore
        preview.style.display = "block";
        setValue(input)
    }

    return (
        <div className={"select_image_container"}>
            <label htmlFor="images" className="drop_container">
                 <img id={"image_preview"} src="" />
                <input type="file" id="images" accept="image/*" onChange={(event: object) => {
                    // @ts-ignore
                    showPreview(event.target.files[0])
                }} required/>
                <i className="ri-image-add-line"></i>
            </label>
        </div>
    )
}