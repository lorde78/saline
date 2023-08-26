import Select from "~/kits/select";
import {useState} from "react";

type Props = {
    courseData: any
    setCoursesData: any
    stepSelected: number
    setStepSelected: any
    typeExercise: any
    exerciseSelected: number
    setExerciseSelected: any
}
export default function Builder_navigation({
                                               courseData,
                                               setCoursesData,
                                               stepSelected,
                                               setStepSelected,
                                               typeExercise,
                                               exerciseSelected,
                                               setExerciseSelected
                                           }: Props) {
    const selecStep = (value: string, id: number) => {
        let stepNumber = value.split(" ")[1]
        // console.log(parseInt(stepNumber) - 1)
        setStepSelected(parseInt(stepNumber) - 1)
    }

    const selectTypeExercise = (value: string, id: number) => {
        setExerciseSelected(id)
        let newCourseData = [...courseData]
        newCourseData[stepSelected].type = "exercise/" + typeExercise[id].option
        setCoursesData(newCourseData)
    }

    const addStep = () => {
        var numberSteps = courseData.length
        var numberStepsClient = courseData.length + 1
        let newSteps = [...courseData]
        if (courseData[numberSteps - 1].type === "") {
            alert("Veuillez choisir un type d'étape")
            return
        } else if (courseData[numberSteps - 1].type === "review") {
            alert("La dernière étape est un examen")
            return
        } else {
            newSteps[numberSteps] = {
                id: numberStepsClient,
                value: "étape " + numberStepsClient,
                type: "",
                data: {}
            }
            setCoursesData(newSteps)
            setStepSelected(numberSteps)
            // console.log(newSteps)
        }
    }

    const resetStep = () => {
        let newCourseData = [...courseData]
        newCourseData[stepSelected].type = ""
        newCourseData.length = stepSelected + 1
        setCoursesData(newCourseData)
    }

    return (
        <nav className={"builder_navigation_container"}>
            <Select
                optionSelected={stepSelected}
                contents={courseData}
                setValue={selecStep}
                propsSetValue={""}
            />
            <button className={"button"} onClick={addStep}>Ajouter une étape</button>
            <div>
                <button className={"button button_alert"} onClick={resetStep}>Réinisialiser l'étape</button>
                <p className={'sub_link'}>La réinitialisation de l'étape supprimera toutes les étapes suivantes.</p>
            </div>
            {
                courseData[stepSelected].type.split("/")[0] === "exercise" ?
                    <Select
                        optionSelected={exerciseSelected}
                        contents={typeExercise}
                        setValue={selectTypeExercise}
                        propsSetValue={""}
                    />
                    :
                    courseData[stepSelected].type === "review" ?
                        <button className={"button"}>Terniminer le cour</button>
                        :
                        <></>
            }
        </nav>
    )
}