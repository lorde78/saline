import {useRef,useEffect, useState} from "react";

interface BindData {
    bind1: string;
    bind2: string;
}

interface Step {
    id: number;
    value: string;
    type: string;
    status?: string;
    data: BindData[];
}

type Props = {
    step: Step;
}
export default function User_courses_step_exercise_bindlist({step}: Props) {
    const bind1Refs = useRef<(HTMLDivElement | null)[]>([]);
    const bind2Refs = useRef<(HTMLDivElement | null)[]>([]);
    const [resizeCounter, setResizeCounter] = useState(0);




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

    useEffect(() => {
        const handleResize = () => {
            setResizeCounter(prev => prev + 1);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            <h2>Reliez, les mots suivent.</h2>
            <div className={"binds_container"}>
                <svg >
                    {Object.entries(answers).map(([key, value], index) => {
                        const startElement = bind1Refs.current[shuffledBind1.indexOf(key)];
                        const endElement = bind2Refs.current[shuffledBind2.indexOf(value)];

                        if (!startElement || !endElement) return null;

                        const startPos = startElement.getBoundingClientRect();
                        const endPos = endElement.getBoundingClientRect();

                        return (
                            <line
                                key={index}
                                x1={startPos.right}
                                y1={startPos.top + startPos.height / 2}
                                x2={endPos.left}
                                y2={endPos.top + endPos.height / 2}
                            />
                        );
                    })}
                </svg>
                <div>
                    {shuffledBind1.map((bind1, id) => (
                        <div className={selectedItem === bind1 ? "selected" : ""} key={id} onClick={() => handleClick(bind1)} ref={ref => bind1Refs.current[id] = ref}>
                            <span>{bind1}</span>
                        </div>
                    ))}
                </div>
                <div>
                    {shuffledBind2.map((bind2, id) => (
                        <div className={selectedItem === bind2 ? "selected" : ""} key={id} onClick={() => handleClick(bind2)} ref={ref => bind2Refs.current[id] = ref}>
                            <span>{bind2}</span>
                        </div>
                    ))}
                </div>
            </div>
            {allSelected ? <button onClick={validateAnswers} className={"button"}>Vérifier les réponses</button> : <></>}
        </>
    );
}
