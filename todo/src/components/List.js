import React from 'react';

const List = (props) => {
    const { list } = props;
    return(
        <div>
            {
                list.list.map(task => {
                    return(
                        <div key={task.id}>{task.item}</div>
                    )
                })
            }
        </div>
    )
};

export default List;