import { useEffect, useState } from "react"
import styles from "./Numbers.module.scss"

interface numbersProps {
    numbers: any
    length: any
    push: any
    clicked: any
}
// при клике активируезся onChange = {setIsActive = true}
// useEffect - добавляет число в массив при клике
// После каждого клика сравнивается весь массив на одинаковые числа, const comparison = массив.map(number => number === number)
//
// if(comparison){onChange={true}}
// if(onChange) {Поздравления}

// const [isActive, setIsActive] = useState()
// const activated = useEffect(() => {})

// При каждом нажатии на кнопку "Roll" должен быть новый рендер мапа, но числа с "особой пометкой" изменятся не должны
// Нужно сделать так, чтобы при нажатии на кнопку с числом это число сохранялось в массиве и при следующем рендере оно не изменялось
const initialTenNumbersArray = Array(10)
const numbersIndexStorage = []
const randomFromOnetoSix = Math.floor(Math.random() * 6)
const numberCreation = Math.floor((Math.random() + 1) * randomFromOnetoSix)
const [activatedButton, setActivatedButton] = useState("")

function push() {
    console.log("Оно работает!!")
}
// for (let i = 0; i < massive.length; i++) {}
// numbersIndexStorage.push(`{number : ${number}, id: ${index}`)
const clicked = useEffect(function () {})

function Numbers() {
    function push() {
        console.log("Оно работает!!")
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.numbers}>
                    {initialTenNumbersArray.fill(randomFromOnetoSix).map((number, index) => (
                        <div className={styles.number} onClick={push}>
                            {numberCreation}
                        </div>
                    ))}
                </div>
                <button className={styles.button} id="rollBtn">
                    Roll
                </button>
            </div>
        </div>
    )
}

export default Numbers
