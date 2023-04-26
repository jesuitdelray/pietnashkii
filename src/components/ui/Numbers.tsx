import { classNames } from "../../lib/classNames"
import { getRandomNumbers } from "../../lib/getRandomNumbers"
import styles from "./Numbers.module.scss"
import { useState, useEffect } from "react"

interface numbersProps {
    numbers: any
    length: any
    push: any
    clicked: any
}

function Numbers() {
    const [numbers, setNumbers] = useState<number[]>(getRandomNumbers(10))
    const [selected, setSelected] = useState([])
    const [win, setWin] = useState(false)

    useEffect(() => {
        const allTheSame = numbers.filter(item => numbers[0] === item).length === 10 //

        if (allTheSame) {
            setWin(true)
        }
    }, [selected])

    function generateNumbers() {
        setWin(false)

        setNumbers(prev =>
            prev.map((item, index) => {
                if (!selected.includes(index)) {
                    return getRandomNumbers(1)[0] //
                }
                return prev[index]
            })
        )
    }

    function toggleSelection(index: number) {
        setSelected(prev => {
            return prev.includes(index)
                ? [...prev.filter(item => item !== index)]
                : [...prev, index]
        })
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.numbers}>
                    {win ? (
                        <div>Congratz</div>
                    ) : (
                        numbers.map((item, index) => (
                            <div
                                className={classNames(styles.number, {
                                    [styles.selected]: selected.includes(index),
                                })}
                                onClick={() => toggleSelection(index)}
                            >
                                {item}
                            </div>
                        ))
                    )}
                </div>
                <button className={styles.button} id="rollBtn" onClick={generateNumbers}>
                    Roll
                </button>
            </div>
        </div>
    )
}

export default Numbers
