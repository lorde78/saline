import 'remixicon/fonts/remixicon.css'
interface Props {
    icon: string
    contents: string
    setValue: any
    props: any
}

export default function Builder_block_button({icon, contents, setValue, props}: Props) {
    return (
        <button className={"button builder_block_button"} onClick={() => setValue(props)}>
            <p>{contents}</p>
            <i className={ icon }></i>
        </button>
    )
}