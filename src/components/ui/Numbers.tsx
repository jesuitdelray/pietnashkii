import styles from "./Numbers.module.scss"
import getRandomNumbers from "../../lib/getRandomNumbers"
import { useEffect, useState } from "react"

interface numbersHolderProps {
    numbersHolder: any
    index: any
}

interface renderingNotTrueProps {
    index: boolean
}

interface trueNumbersHolderProps {
    trueNumbersHolder: any
}
// const [currentNumbers, setCurrentNumbers] = useState(getRandomNumbers(10))

// function renderingNotTrue() {}

function randomNumbersRender() {
    const [numbersHolder]: any = []
    const [clickedNumber, setClickedNumber] = useState<number[]>([])
    const [numberStyle, setNumberStyle] = useState(styles.number)

    // useEffect(() => {
    //     if () {
    //     }
    // }, [clickedNumber])
    function toggleButton() {
        return setClickedNumber(numberIndex =>
            numbersHolder.includes(numberIndex)
                ? numberIndex.pop() && setNumberStyle(styles.numberFalse)
                : numbersHolder.push(numberIndex) && setNumberStyle(styles.numberTrue)
        )
    }

    return (
        <div className={styles.numbersBlock}>
            {getRandomNumbers(10).map(
                (item, index) =>
                    numbersHolder.push(`${index}`) && (
                        <div
                            className={numberStyle}
                            onClick={() => clickedNumber.push(index) && toggleButton}
                        >
                            {item}
                        </div>
                    )
            )}
        </div>
    )
}

export default function Numbers() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.applicationBlock}>
                {randomNumbersRender(){/* !!! */}}
                <button className={styles.button} onClick={() => randomNumbersRender()/* !!! */}>
                    Roll
                </button>
            </div>
        </div>
    )
}
