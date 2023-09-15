import 'remixicon/fonts/remixicon.css'
import {useEffect, useState} from "react";
import {preview} from "vite";


interface Props {
    icon: string;
    folderType: string;
    idType: string;
    buttonMessage: string;
    setFileInfo: any;
    filesData: any;
    fileType: string;
    dbFile: any;
}

/***
 *
 * @param icon
 * @param folderType
 * @param idType
 * @param buttonMessage
 * @param setFileInfo
 * @param filesData
 * @param fileType
 * @constructor
 *
 * <Builder_select_folder icon={"ri-file-2-line"} folderType={"application/pdf"} idType={"pdf"} buttonMessage={"Choisi un fichier pour ton énoncé"} />
 *
 */

export default function Builder_select_folder({icon, folderType, idType, buttonMessage, dbFile, setFileInfo, filesData, fileType}: Props) {
    const [inputSet, setInputSet] = useState(false)

    useEffect(() => {
        if (filesData) {
            let uploadedFile = null;
            let url = null;
            let preview = null;

            if (dbFile) {
                uploadedFile = dbFile
            } else {
                uploadedFile = filesData.find((file: any) => file.fileType === fileType)

            }

            if (uploadedFile) {
                if (typeof uploadedFile === "string") {
                    url = uploadedFile
                    preview = document.getElementById("preview_" + idType);
                } else {
                    url = URL.createObjectURL(uploadedFile.file);
                    preview = document.getElementById("preview_" + idType);
                }

                // @ts-ignore
                preview.src = url;
                // @ts-ignore
                preview.style.display = "block";
            }
        }
    },[])

    const showPreview = (input:any) => {
        setInputSet(true)
        console.log(input);
        var url = URL.createObjectURL(input);
        console.log(' lien : ' + url)
        var preview = document.getElementById("preview_" + idType);

        // @ts-ignore
        preview.src = url;
        // @ts-ignore
        preview.style.display = "block";
        setFileInfo(input)
    }

    const typePreview = () => {
      switch (idType) {
          case "Video":
              return (
                  <iframe
                      src=""
                      id={"preview_" + idType}
                      frameBorder='0'
                      allow='autoplay; encrypted-media'
                      allowFullScreen
                      title='video'
                      className={"preview"}
                  />
              )
          case "PDF":
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
                    // @ts-ignore
                    showPreview(event.target.files[0])
                }} required />
            </label>
        </div>
    )
}