import React from 'react';

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: ''
    }
    }

    onUpdate = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

    submit = event => {
        event.preventDefault();
        if (this.state.input.length >= 1) {
            console.log('inside submit', this.state.input)
            this.props.addTask(this.state.input)
            this.setState({ input: '' })
        }
    }
    

    render() {
        return (
            <form className='form'>
            <input 
            required
            placeholder='Task'
            name="input"
            value={this.state.input} 
            onChange={this.onUpdate} >
            </input>
            <button className='button' onClick={this.submit}>Add Todo</button>
          </form>
            )
    }
}

export default TodoForm
