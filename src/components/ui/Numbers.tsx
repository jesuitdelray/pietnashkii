import styles from "./Numbers.module.scss"
import { numbers } from "../model/list"

function Numbers() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.numbers}>
                    {numbers.map(number => (
                        <div className={styles.number}>{number}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Numbers
