import React from 'react';

function Todo(props) {
    let classNames = "item";
    // if (props.item.task.complete) {
    //   classNames += " completed";
    // }

    function toggle() {
        props.toggleTask(props.item.id)
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