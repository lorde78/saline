import 'remixicon/fonts/remixicon.css'
interface Props {
    icon: string
    contents: string
}

export default function Builder_block_button({icon, contents}: Props) {
    return (
        <div className={"builder_block_button"}>
            <p>{contents}</p>
            <i className={ icon }></i>
        </div>
    )
}