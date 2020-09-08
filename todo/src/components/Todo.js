import React from 'react';

const Todo = props => {
    const { task, toggleComplete } = props;
    return (
        <div onClick={() => toggleComplete(task)}>
            {task.item}
        </div>
    )
};

export default Todo;