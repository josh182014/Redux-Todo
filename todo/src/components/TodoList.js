import React from 'react';
import Todo from './Todo'
import { connect } from 'react-redux'

import { addTask, toggleTask } from '../actions'


class TodoList extends  React.Component {
    state = {
        newTask: ''
    };

    handleChanges = e => {
        this.setState({ newTask: e.target.value })
    }

    addTask = e => {
        e.preventDefault();
        this.props.addTask(this.state.newTask)
        this.setState({ newTask: ''})
    }

    toggleTask = id => {
        console.log('toggled')
        this.props.toggleTask(id);
    }

    render() {
        console.log('TodoList.js', this.props)
        return (
            <React.Fragment>
                {this.props.tasks.map(eachTask => (        
                    <Todo item={eachTask} toggleTask={this.toggleTask} />
                ))}
                    <input 
                    required
                    placeholder='Task'
                    name="input"
                    value={this.state.newTask} 
                    onChange={this.handleChanges} >
                    </input>
                    <button className='button' onClick={this.addTask}>Add Todo</button>
        </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
      tasks: state.tasks
    };
};
  
export default connect(
    mapStateToProps,
    { addTask, toggleTask }
)(TodoList);
