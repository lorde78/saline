export default function Form_register() {
    return (
        <form action="" method="post">
            <h1>Inscription</h1>
            <div className="input-container">
                <input id="email" className={"input"} type="text" placeholder=" "/>
                <label htmlFor="email" className="placeholder">Mail</label>
            </div>
            <div className="input-container">
                <input id="firstname" className={"input"} type="text" placeholder=" "/>
                <label htmlFor="firstname" className="placeholder">Prénom</label>
            </div>
            <div className="input-container">
                <input id="lastname" className={"input"} type="text" placeholder=" "/>
                <label htmlFor="lastname" className="placeholder">Nom</label>
            </div>
            <div className="input-container">
                <input id="password" className={"input"} type="password" placeholder=" "/>
                <label htmlFor="password" className="placeholder">Mot de passe</label>
            </div>

            <button className={"button"} type="submit">Suivant</button>
            <a href={""} className={"sub_link"}>Voir la Politique confidentialité</a>
        </form>
    )
}