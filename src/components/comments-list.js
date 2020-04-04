import React from 'react';

const CommentsList = (props) => {
    const {commentsList, removeComment} = props; 

    return (
        <div>
            <h2 className = 'title'>List of comments</h2>   

            <ol>
                {
                    commentsList.map(comment => {

                        return (
                            <li key = {comment.id} className = 'list-item'
                            >
                                <div className = 'top-article'>
                                    <p className = 'comment'>{comment.text}</p> 
                                    <button name = "button-delete" className = 'comment-delete-button' aria-label="Удалить комментарий"
                                    onClick = {ev => removeComment(comment.id)}
                                    ></button>
                                </div>

                                <p className = 'author'>{comment.author}</p>
                                <p className = 'date'>{comment.date}</p> 
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    );
}
export default CommentsList;