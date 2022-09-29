export const addToStorage = ({key, value}) => {
    return localStorage.setItem(key, JSON.stringify(value))
}
export const deleteFromStorage = (key) => {
    return localStorage.removeItem(key)
}
export const getFromStorage = (key) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : undefined
}