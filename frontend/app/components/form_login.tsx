export default function Form_login() {
    return (
        <form action="" method="post">
            <h1>Connexion</h1>
            <div className="input-container">
                <input id="email" className={"input"} type="text" placeholder=" "/>
                <label htmlFor="email" className="placeholder">Mail</label>
            </div>
            <div className="input-container">
                <input id="password" className={"input"} type="password" placeholder=" "/>
                <label htmlFor="password" className="placeholder">Mot de passe</label>
            </div>

            <button className={"button"} type="submit">Connexion</button>
            <a href={""} className={"sub_link"}>Tu as oublié ton mot de passe ?</a>
        </form>
    )
}