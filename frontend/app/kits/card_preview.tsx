interface ContentProps {
    status: string
    chapter: string
}

type Props = {
    img: string
    title: string
    description: string
    professor: string
    courtyard_data: ContentProps
};


export default function Card_preview({img, title, description, professor, courtyard_data}: Props) {

    const whatStatus = (status: string) => {
        switch (status) {
            case "Finish" :
                return (
                    <>
                        <p>Terminé</p>
                        <span className={"status status-finish"}></span>
                    </>
                )
            case "Progress" :
                return (
                    <>
                        <p>En cours</p>
                        <span className={"status status-progress"}></span>
                    </>
                )
            case "Do" :
                return (
                    <>
                        <p>À faire</p>
                        <span className={"status status-do"}></span>
                    </>
                )
            default :
                return
        }
    }

    return (
        <div className="card_preview_container">
            <div className={"image_container"}>
                <img src={img}/>
            </div>
            <div className={"infos_container"}>
                {courtyard_data.status == "" ?
                    "" :
                    <div>
                        <h4>{courtyard_data.chapter}</h4>
                        <span className={"status_container"}>{whatStatus(courtyard_data.status)}</span>
                    </div>
                    }
                <div>
                    <h4>{title}</h4>
                    <p>{professor}</p>
                </div>
                <div>
                    {description}
                </div>
            </div>
        </div>
    )
}