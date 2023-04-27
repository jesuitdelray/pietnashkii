export default function getRandomNumbers(quantity: number) {
    const array = []

    for (let i = 0; i < quantity; i++) {
        array.push(Math.floor(Math.random() * 6))
    }
    return array
}
