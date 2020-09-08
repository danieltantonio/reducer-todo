import React, { useState } from 'react';

import Todo from './Todo';

const List = (props) => {
    const { list, dispatch } = props;
    const [ markedComplete, setMarkedComplete ] = useState([]);

    const toggleComplete = task => {
        dispatch({ type: 'TOGGLE_TODO', index: (list.list.indexOf(task)) })
        // console.log(list.list.indexOf(task));
    }

    return(
        <div>
            {
                list.list.map(task => {
                    return(
                        <Todo key={task.id} task={task} toggleComplete={toggleComplete}/>
                    )
                })
            }
        </div>
    )
};

export default List;