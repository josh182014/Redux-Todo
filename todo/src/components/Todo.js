import React from 'react';

function Todo(props) {
    let classNames = "item";
    if (props.item.completed) {
      classNames += " completed";
    }

    function toggle() {
        props.toggleItem(props.task.id)
    }

    return (
        <div className='eachItem'>
            <li className={classNames} onClick={toggle}>
                {props.item.task}
            </li>
        </div>
    )
}

export default Todo;