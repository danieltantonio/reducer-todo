import React from 'react';

const List = (props) => {
    const { list } = props;
    console.log(list.list);
    return(
        <div>
            {
                list.list.map(task => {
                    return(
                        <div>{task.item}</div>
                    )
                })
            }
        </div>
    )
};

export default List;