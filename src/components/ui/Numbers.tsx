import styles from "./Numbers.module.scss"
import { useState, useEffect } from "react"
import getRandomNumbers from "../../lib/getRandomNumbers"
import { classNames } from "../../lib/classNames"

export default function Numbers() {
    const [isRolled, setIsRolled] = useState(getRandomNumbers(10))
    const [isToggled, setToggled] = useState<number[]>([])
    const [win, setWin] = useState(false)

    useEffect(() => {
        /*  */
    })

    function toggle(index: number) {
        setToggled(prev => {
            return prev.includes(index)
                ? [...prev.filter(item => item !== index)]
                : [...prev, index]
        })
    }

    function roll() {
        setWin(false) ///

        setIsRolled(prev =>
            prev.map((item, index) => {
                if (!isToggled.includes(index)) {
                    return getRandomNumbers(1)[0]
                }
                return prev[index]
            })
        )
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.numbers}>
                {isRolled.map((number, index) => (
                    <div
                        className={classNames(styles.numberBtn, {
                            [styles.numberActive]: isToggled.includes(index),
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
