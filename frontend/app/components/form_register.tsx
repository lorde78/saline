import Input from "~/kits/input";

export default function Form_register() {
    return (
        <form action="" method="post">
            <h1>Inscription</h1>
            <Input type={"email"} name={"email"} placeholder={"Mail"} />
            <Input type={"text"} name={"firstname"} placeholder={"Prénom"} />
            <Input type={"text"} name={"lastname"} placeholder={"Nom"} />
            <Input type={"password"} name={"password"} placeholder={"Mot de passe"} />
            <button className={"button"} type="submit">Suivant</button>
            <a href={""} className={"sub_link"}>Voir la Politique confidentialité</a>
        </form>
    )
}