export const inputChange = (e) => ({
    type: `${e.target.name}`,
    inputText: e.target.value, 
})