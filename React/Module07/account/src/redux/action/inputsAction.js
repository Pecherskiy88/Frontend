export const inputChange = (e) => ({
    type: `${e.target.name}`,
    inputText: e.target.value,
    name: `${e.target.name}`,
})
export const editChange=(arr, id) => ({
    type: 'EDITCHANGE',
    obj: arr.find(el => el.id === Number(id))
})