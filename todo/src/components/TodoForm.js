import React, { useState } from 'react';

const TodoForm = props => {
    const [formItem, setFormItem] = useState('');
    const { list, dispatch } = props;

    const onSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', value: { item: formItem, completed: false, id: (list.list[0].id + 1) } })
        setFormItem('');
    }

    const onChange = e => {
        const { value } = e.target;
        setFormItem(value);
    }

    return (
        <div>
          <form onSubmit={onSubmit}>
            <label>Add To Do: </label>
            <input type="text" value={formItem} onChange={onChange}/>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => console.log('It works')}>Clear Complete</button>
          </form>
        </div>
    )
};

export default TodoForm;