export const save = (object, editFlag) => ({
    type: 'SAVE',
    replaceObj: object,
    editFlag: editFlag,
})
export const getLocal = () => ({
    type: 'LOADED',
})