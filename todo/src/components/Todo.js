import React from 'react';

const Todo = props => {
    const { task, markCompleted } = props;

    // const toggleComplete = task => {
    //     dispatch({ type: 'TOGGLE_TODO', index: task })
    //     // console.log(list.list.indexOf(task));
    //     debugger;
    // }

    return (
        <div onClick={() => markCompleted(task)}>
            <h3>{task.item}</h3>
            <p>Completed: {task.completed.toString()}</p>
        </div>
    )
};

export default Todo;