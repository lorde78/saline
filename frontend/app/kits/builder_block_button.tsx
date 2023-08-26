import 'remixicon/fonts/remixicon.css'

interface Props {
    icon: string
    contents: string
    setValue: any
    props: any
    off: boolean
}

export default function Builder_block_button({icon, contents, setValue, props, off}: Props) {
    return (
        <button
            className={off ? "builder_block_button" : "button builder_block_button"}
            onClick={off ? () => console.log("button is off") : () => setValue(props)}
            style={off ? {opacity: "50%"} : {}}
        >
            <p>{contents}</p>
            <i className={icon}></i>
        </button>
    )
}