type Props = {
    setValue: any
    value: any
    propsSetValue: any
};

export default function Color_picker({value, setValue, propsSetValue}: Props) {
    return (
        <label className={"color_picker"}>
            <input type={"color"} value={value}
                   onChange={(e) => {
                       setValue(e.target.value, propsSetValue)
                   }}/>
            <i className="ri-pencil-line"></i>
        </label>
    )
}