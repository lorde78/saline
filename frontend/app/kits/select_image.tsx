import 'remixicon/fonts/remixicon.css'
import {useState} from "react";

export default function Select_image() {

    const showPreview = (input) => {
        console.log(input);
        var url = URL.createObjectURL(input);
        console.log(' image : ' + url)
        var preview = document.getElementById("image_preview");
        preview.src = url;
        preview.style.display = "block";

    }

    return (
        <div className={"select_image_container"}>
            <label htmlFor="images" className="drop_container">
                 <img id={"image_preview"} src="" />
                <input type="file" id="images" accept="image/*" onChange={(event: object) => {
                    showPreview(event.target.files[0])
                }} required/>
                <i className="ri-image-add-line"></i>
            </label>
        </div>
    )
}