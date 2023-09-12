import 'remixicon/fonts/remixicon.css'
import {useState} from "react";
import {preview} from "vite";
import {html} from "mdast-util-to-markdown/lib/handle/html";


interface Props {
    icon: string
    folderType: string
    idType: string
    buttonMessage: string
}

/***
 *
 * @param icon
 * @param folderType
 * @param idType
 * @param buttonMessage
 * @constructor
 *
 * <Builder_select_folder icon={"ri-file-2-line"} folderType={"application/pdf"} idType={"pdf"} buttonMessage={"Choisi un fichier pour ton énoncé"} />
 *
 */

export default function Builder_select_folder({icon, folderType, idType, buttonMessage}: Props) {
    const [inputSet, setInputSet] = useState(false)

    const showPreview = (input:any) => {
        setInputSet(true)
        var url = URL.createObjectURL(input);
        var preview = document.getElementById("preview_" + idType);
        // @ts-ignore
        preview.src = url;
        // @ts-ignore
        preview.style.display = "block";
    }

    const typePreview = () => {
      switch (idType) {
          case "video":
              return (
                  <video id={"preview_" + idType} className={"preview"}>
                      <source src="" />
                  </video>
              )
          case "pdf":
              return (
                  <iframe src="" id={"preview_" + idType} className={"preview"}> </iframe>
              )
          default :
              return
      }
    }

    return (
        <div className={"builder_select_folder"}>
            <div className={"preview_container"}>
                {typePreview()}
                <i className={icon}></i>
            </div>
            <label htmlFor={idType} className="drop_container">
                <span className={"button"}>{buttonMessage}</span>
                <input type="file" accept={folderType}  id={idType} onChange={(event: object) => {
                    // @ts-ignore
                    showPreview(event.target.files[0])
                }} required />
            </label>
        </div>
    )
}