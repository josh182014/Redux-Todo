import React from 'react';

function Todo(props) {
    let classNames = "item";
    if (props.item.complete) {
      classNames += " completed";
    }

    function toggle() {
        props.toggleTask(props.item.id)
    }

    return (
        <div className='eachItem'>
            <div className={classNames} onClick={toggle}>
                {props.item.task} 
            </div>
        </div>
    )
}

export default Todo;