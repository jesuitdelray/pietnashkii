/* import { useEffect, useState } from "react"
import { classNames } from "../../../../lib/classNames"
import styles from "./WonBlock.module.scss"

export function WonBlock({ win, tries, newRecord }) {
    const [isActive, setIsActive] = useState(false)
    function resetButton() {
        setWin(false)
    }
    return (
        <div className={isActive ? styles.winMessageBlock : styles.winMessageBlockVisible}>
            <p>You won!</p>
            <p>You made tries: {tries}</p>
            <p>Your record is: {newRecord}</p>
            <button className={styles.resetButton} onClick={}>
                Try again
            </button>
        </div>
    )
}
 */
