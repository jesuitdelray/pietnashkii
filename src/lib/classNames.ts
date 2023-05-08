interface IMods {
    [key: string]: boolean
}

export function classNames(main: string, mods: IMods, additional: string[] | undefined) {
    const className = [main]

    Object.entries(mods).forEach(([key, value]) => {
        if (value) {
            className.push(key)
        }
    })

    if (additional && additional.length) {
        additional.forEach(item => {
            className.push(item)
        })
    }

    return className.join(" ")
}
