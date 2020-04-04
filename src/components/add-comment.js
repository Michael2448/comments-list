import React from 'react';

const AddComment = (props) => {
    const {addComment} = props;

    return (
        <form onSubmit = {ev => {
            addComment (ev.target.elements.commentPrinted.value, ev.target.elements.authorPrinted.value);
            ev.target.elements.commentPrinted.value = '';
            ev.target.elements.authorPrinted.value = '';
            ev.preventDefault();
        }}
        >
            <input type='text' placeholder='Ваш комментарий' className = 'input' name = 'commentPrinted'
            />
            <input type='text' placeholder='Ваше имя' className = 'input' name = 'authorPrinted'
            />
            <input type='submit' className = 'send-button'/>
        </form>
    )
}
export default AddComment;