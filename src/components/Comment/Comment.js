import React from 'react';

const Comment = (props) => {
    const {name, email} = props.comment;
    return (
        <p>
           {name}: {email} 
        </p>
    );
};

export default Comment;