type Props = {
    setValue: any
    value: any
};

export default function Color_picker({value, setValue}: Props) {
    return (
        <label className={"color_picker"}>
            <input type={"color"} value={value}
                   onChange={(e) => {setValue(e.target.value)}}/>
            <i className="ri-pencil-line" ></i>
        </label>
    )
}