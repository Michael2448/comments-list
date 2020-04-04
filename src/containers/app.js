import React from 'react';
import {connect} from 'react-redux';

import CommentsList from '..//components/comments-list';
import AddComment from '..//components/add-comment';
import {addComment, removeComment} from '../actions';

let App = (props) => {
    const {
        commentsList, addComment, removeComment
    } = props;

    return (
        <div>
            <CommentsList commentsList = {commentsList} removeComment = {removeComment}/>
            <AddComment addComment = {addComment}/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        commentsList: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (text, author) => dispatch(addComment(text, author)),
        removeComment: (id) => dispatch(removeComment(id))
    }
}
App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;