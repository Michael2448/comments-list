let commentId = -1;

// action creators

export const addComment = (text, author) => {
    const dateCalculate = () => {
        const objDate = new Date();
        const day = objDate.getDate();
        const monthNumber = objDate.getMonth();
        const year = objDate.getFullYear();
        const hoursNumber = String(objDate.getHours()).length < 2 ? '0' + objDate.getHours() : objDate.getHours();
        const minutesNumber = String(objDate.getMinutes()).length < 2 ? '0' + objDate.getMinutes() : objDate.getMinutes();
        const monthList = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
    
        return (day + ' ' + monthList[monthNumber] + ' ' + year + ', ' + hoursNumber  + ':' + minutesNumber)
    }
    commentId += 1;
    return {
        type: 'ADD_COMMENT',
        id: commentId,
        text: text,
        author: author,
        date: dateCalculate()
    }
} 
export const removeComment = (id) => {
    return {
        type: 'REMOVE_COMMENT',
        id: id
    }
}