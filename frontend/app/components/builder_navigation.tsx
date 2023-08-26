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
        // @ts-ignore
        let stepNumber = value.split(" ")[1] - 1
        setStepSelected(stepNumber)
    }

    const selectTypeExercise = (value: string, id: number) => {
        let newCourseData = [...courseData]
        newCourseData[stepSelected].type = "exercise/" + typeExercise[id].option
        if (typeExercise[id].option === "qcm") {
            newCourseData[stepSelected].data = [
                {
                    "question": "",
                    "multipleChoice": false,
                    "choice": [
                        {
                            "answer": "",
                            "goodAnswer": false
                        }
                    ]
                }
            ]
        } else if (typeExercise[id].option === "bind_list") {
            newCourseData[stepSelected].data = [{
                "bind1": "",
                "bind2": "",
            }]
        }
        setCoursesData(newCourseData)
    }

    const addStep = () => {
        var numberSteps = courseData.length
        var numberStepsClient = courseData.length + 1
        let newSteps = [...courseData]

        if (courseData[numberSteps - 1].type === "") {
            alert("Veuillez choisir un type pour l'étape " + numberSteps)
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

    const deleteStep = () => {
        let newCourseData = [...courseData]
        if (stepSelected === 0) {
            alert("Vous ne pouvez pas supprimer la première étape")
        } else {
            const resultUp = newCourseData.filter((row) => row.id > stepSelected + 1);
            const resultDown = newCourseData.filter((row) => row.id < stepSelected + 1);
            newCourseData = [...resultDown, ...resultUp]
            // console.log(newCourseData)
            resultUp.map((row) => {
                row.id = row.id - 1
                row.value = "étape " + row.id
            })
            setStepSelected(stepSelected - 1)
            setCoursesData(newCourseData)
        }
    }
    const resetStep = () => {
        let newCourseData = [...courseData]
        newCourseData[stepSelected].type = ""
        newCourseData[stepSelected].data = {}
        // newCourseData.length = stepSelected + 1
        setCoursesData(newCourseData)
    }

    const sendData = () => {
      courseData.map((row: any) => {
          if (row.type === "") {
              alert("Veuillez choisir un type pour l'étape " + row.id)
              return
          }
      })
    }

    return (
        <nav className={"builder_navigation_container"}>
            <Select
                optionSelected={stepSelected}
                setOptionSelected={setStepSelected}
                contents={courseData}
                setValue={selecStep}
                propsSetValue={""}
            />
            <button className={"button"} onClick={addStep}>Ajouter une étape</button>
            <button className={"button button_alert"} onClick={resetStep}>Réinisialiser l'étape</button>
            <button className={"button button_alert"} onClick={deleteStep}>Supprimer l'étape</button>
            {
                courseData[stepSelected].type.split("/")[0] === "exercise" ?
                    <Select
                        optionSelected={exerciseSelected}
                        setOptionSelected={setExerciseSelected}
                        contents={typeExercise}
                        setValue={selectTypeExercise}
                        propsSetValue={""}
                    />
                    :
                    courseData[stepSelected].type === "review" ?
                        <button className={"button"} onClick={sendData}>Terniminer le cour</button>
                        :
                        <></>
            }
        </nav>
    )
}