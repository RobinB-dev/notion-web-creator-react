export const testObj = (o: object, search: string) => {
    if (!o) { return }

    for (const [key, value] of Object.entries(o)) {
        if (key === search) {
            return value
        }
    }
}