import {useEffect, useState} from "react";

interface BindData {
    bind1: string;
    bind2: string;
}

interface Step {
    id: number;
    value: string;
    type: string;
    professor: string;
    status: string;
    data: BindData[];
}

type Props = {
    step: Step;
}
export default function User_courses_step_exercise_bindlist({step}: Props) {

    const shuffle = (array: string[]) => {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [shuffledBind1, setShuffledBind1] = useState<string[]>([]);
    const [shuffledBind2, setShuffledBind2] = useState<string[]>([]);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    useEffect(() => {
        setShuffledBind1(shuffle(step.data.map(item => item.bind1)));
        setShuffledBind2(shuffle(step.data.map(item => item.bind2)));
    }, [step]);

    const isBind1Selected = selectedItem && shuffledBind1.includes(selectedItem);
    const isBind2Selected = selectedItem && shuffledBind2.includes(selectedItem);


    const handleClick = (item: string) => {
        if (!selectedItem) {
            setSelectedItem(item);
        } else {
            if (isBind1Selected && shuffledBind2.includes(item)) {
                const keyForExistingBind = Object.keys(answers).find(k => answers[k] === item);
                if (keyForExistingBind) {
                    setAnswers(prev => {
                        const updatedAnswers = { ...prev };
                        delete updatedAnswers[keyForExistingBind];
                        return updatedAnswers;
                    });
                }
                setAnswers(prev => ({ ...prev, [selectedItem]: item }));
                setSelectedItem(null);
            }
            else if (isBind2Selected && shuffledBind1.includes(item)) {
                const keyForExistingBind = Object.keys(answers).find(k => answers[k] === selectedItem);
                if (keyForExistingBind) {
                    setAnswers(prev => {
                        const updatedAnswers = { ...prev };
                        delete updatedAnswers[keyForExistingBind];
                        return updatedAnswers;
                    });
                }
                setAnswers(prev => ({ ...prev, [item]: selectedItem }));
                setSelectedItem(null);
            } else {
                setSelectedItem(item);
            }
        }
    }

    const [allSelected, setAllSelected] = useState<boolean | null>(false);
    const areAllItemsBound = () => {
        const answersArray = Object.keys(answers);
        if(answersArray.length === 0) {
            setAllSelected(false);
            return;
        } else {
            setAllSelected(shuffledBind1.every(bind1 => Object.keys(answers).includes(bind1)));
        }
    }

    useEffect(() => {
        areAllItemsBound()
    }, [answers]);

    const validateAnswers = () => {
        let isCorrect = true;

        for (let item of step.data) {
            if (answers[item.bind1] !== item.bind2) {
                isCorrect = false;
                break;
            }
        }

        if (isCorrect) {
            alert("Toutes les réponses sont correctes!");
        } else {
            alert("Certaines réponses sont incorrectes.");
        }
    }

    return (
        <>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div>
                    {shuffledBind1.map((bind1, id) => (
                        <div key={id} onClick={() => handleClick(bind1)}>
                            <span style={selectedItem === bind1 ? {background: "yellow"} : {}}>{bind1}</span>
                        </div>
                    ))}
                </div>
                <div>
                    {shuffledBind2.map((bind2, id) => (
                        <div key={id} onClick={() => handleClick(bind2)}>
                            <span style={selectedItem === bind2 ? {background: "yellow"} : {}}>{bind2}</span>
                        </div>
                    ))}
                </div>
            </div>
            <pre>
                {JSON.stringify(answers, null, 2)}
            </pre>
            {allSelected ? <button onClick={validateAnswers} className={"button"}>Vérifier les réponses</button> : <></>}
        </>
    );
}
