import Select from "~/kits/select";
import {useState} from "react";


export default function Builder_navigation() {
    const [steps, setSteps] = useState([{value: "step1", option: "étape 1"}])
    const [stepSelcted, setStepSelected] = useState("étape 1")
    const addStep = () => {
        var numberSteps = steps.length+1
        setSteps([...steps, {value: "step" + numberSteps, option: "étape " + numberSteps}])
    }
    return (
        <nav className={"builder_navigation_container"}>
            <Select defaultContent={"step1"} contents={steps} setValue={setStepSelected} propsSetValue={""}/>
            <button className={"button"} onClick={addStep}>Ajouter une étape</button>
        </nav>
    )
}