import styles from "./Numbers.module.scss"
import { useState, useEffect } from "react"
import getRandomNumbers from "../../lib/getRandomNumbers"
import { classNames } from "../../lib/classNames"

export default function Numbers() {
    const [isRolled, setIsRolled] = useState(getRandomNumbers(10))
    const [toggled, setToggled] = useState<number[]>([])
    const [win, setWin] = useState(false) ///
    const [tries, setTries] = useState(0)
    const [records, setRecords] = useState([])
    const [newRecord, setNewRecord] = useState(0)

    useEffect(() => {
        const winningCondition =
            toggled.length === 10 && isRolled.every(item => item === isRolled[0])
        if (winningCondition) {
            setRecords(prev => {
                return [...prev, tries]
            })
            setNewRecord(Math.min(...records))
            console.log("win true")
            return setWin(true)
        }
        if (!winningCondition) {
            console.log("win false")
            return setWin(false)
        }
    })

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

        setTries(tries + 1)
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
                <p>Your record is: {newRecord}</p>
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
