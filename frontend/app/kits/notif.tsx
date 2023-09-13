export default function Notif({text,type}: any) {
    return(
        <label className="alertContainer">
            <input type="checkbox" className="alertCheckbox" autoComplete="off"/>
            <div className={`alert ${type}`}>
                <span className="alertClose">X</span>
                <span className="alertText">{text}
        <br className="clear"/></span>
            </div>
        </label>
    )
}