import styles from "./Numbers.module.scss"
import { useState, useEffect } from "react"
import getRandomNumbers from "../../lib/getRandomNumbers"
import { classNames } from "../../lib/classNames"

const initialRecords = localStorage.getItem("Record")
    ? JSON.parse(localStorage.getItem("Record"))
    : []

export default function Numbers() {
    const [isRolled, setIsRolled] = useState(getRandomNumbers(10))
    const [toggled, setToggled] = useState<number[]>([])
    const [win, setWin] = useState(false) ///
    const [tries, setTries] = useState(0)
    const [records, setRecords] = useState(initialRecords)

    console.log(records, "records")

    useEffect(() => {
        const winningCondition =
            toggled.length === 10 && isRolled.every(item => item === isRolled[0])
        if (toggled) {
            if (winningCondition) {
                setRecords(prev => {
                    const newData = [...prev, tries].sort((a, b) => a - b)
                    localStorage.setItem("Record", JSON.stringify(newData))
                    return newData
                })
                console.log("win true")
                setWin(true)
            } else {
                console.log("win false")
                setWin(false)
            }
        }
    }, [toggled])

    function resetButton() {
        setTries(0)
        setToggled([])
        setIsRolled(getRandomNumbers(10))
    }

    function toggle(index: number) {
        setToggled(prev => {
            return prev.includes(index)
                ? [...prev.filter(item => item !== index)]
                : [...prev, index]
        })
    }

    function roll() {
        setIsRolled(prev =>
            prev.map((item, index) => {
                if (!toggled.includes(index)) {
                    return getRandomNumbers(1)[0]
                }
                return prev[index]
            })
        )

        setTries(prev => prev + 1)
    }
    return (
        <div className={styles.wrapper}>
            <div
                className={classNames(styles.winMessageVisibleBlock, {
                    [styles.winMessageInvisibleBlock]: !win,
                })}
            >
                <p>You won!</p>
                <p>You made tries: {tries}</p>
                Highscores:{" "}
                {records?.slice(0, 3).map(item => (
                    <p>{item}</p>
                ))}
                <button className={styles.resetButton} onClick={resetButton}>
                    Try again
                </button>
            </div>
            <div className={styles.numbers}>
                {isRolled.map((number, index) => (
                    <div
                        className={classNames(styles.numberBtn, {
                            [styles.numberActive]: toggled.includes(index),
                        })}
                        onClick={() => toggle(index)}
                    >
                        {number}
                    </div>
                ))}
            </div>
            <button className={styles.button} onClick={roll}>
                Roll
            </button>
        </div>
    )
}
