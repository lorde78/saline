import Input from "~/kits/input";

export default function Form_login() {
    return (
        <form action="" method="post">
            <h1>Connexion</h1>
            <Input type={"email"} name={"email"} placeholder={"Mail"} />
            <Input type={"password"} name={"password"} placeholder={"Mot de passe"} />
            <button className={"button"} type="submit">Connexion</button>
            <a href={""} className={"sub_link"}>Tu as oublié ton mot de passe ?</a>
        </form>
    )
}