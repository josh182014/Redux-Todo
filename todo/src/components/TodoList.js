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
                    <Todo key={eachTask.id} item={eachTask} toggleTask={this.toggleTask} />
                ))}
                <form className='mainForm' onSubmit={this.addTask}>
                    <input 
                    required
                    autoComplete='off'
                    placeholder='Task'
                    name="input"
                    value={this.state.newTask} 
                    onChange={this.handleChanges} >
                    </input>
                    <button className='button' type='submit'>Add Todo</button>
                </form>
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
