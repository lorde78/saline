import 'remixicon/fonts/remixicon.css'
import {useState} from "react";
import {preview} from "vite";


interface Props {
    icon: string
    folderType: string
    idType: string
    buttonMessage: string
}
export default function Builder_select_folder({icon, folderType, idType, buttonMessage}: Props) {
    const [inputSet, setInputSet] = useState(false)

    const showPreview = (input) => {
        setInputSet(true)
        console.log(input);
        var url = URL.createObjectURL(input);
        console.log(' lien : ' + url)
        var preview = document.getElementById("preview_" + idType);
        preview.src = url;
        preview.style.display = "block";
    }

    const typePreview = () => {
      switch (idType) {
          case "video":
              console.log(idType)
              return (
                  <video id={"preview_" + idType} className={"preview"}>
                      <source src="" />
                  </video>
              )
          case "pdf":
              console.log(idType)
              return (
                  <iframe src="" id={"preview_" + idType} className={"preview"}> </iframe>
              )
          default :
              console.log(idType)
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
                    showPreview(event.target.files[0])
                }} required />
            </label>
        </div>
    )
}