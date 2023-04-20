import { useEffect, useState } from "react"
import styles from "./Numbers.module.scss"

interface numbersProps {
    numbers: any
    length: any
}

const [isActive, setIsActive] = useState(numbers ? numbers.styles.backgroundColor="black")
const activated = useEffect(() => {})

function Numbers() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.numbers}>
                    {Array(10)
                        .fill(Math.floor(Math.random() * 6))
                        .map(number => (
                            <div className={styles.number}>
                                {Math.floor((Math.random() + 1) * number)}
                            </div>
                        ))}
                </div>
                <button className={styles.button}>Roll</button>
            </div>
        </div>
    )
}

export default Numbers
