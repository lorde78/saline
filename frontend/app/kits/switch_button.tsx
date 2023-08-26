type Props = {
    name: string
    setValue: any
    propsSetValue: any,
    value:boolean
};


/***
 * @param name
 * @param setValue
 * @param propsSetValue (laisser vide si setValue n'est pas une fonction)
 * @param value
 * @constructor
 */

export default function Switch_button({name, setValue, propsSetValue, value}: Props) {
    return (
        <label className={"switch"}>
            <input  onChange={(e) => {setValue(e.target.checked, propsSetValue)}} type={"checkbox"} name={name} checked={value}/>
            <span className={"slider"}>
            </span>
        </label>
    )
}