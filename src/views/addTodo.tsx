import { FormEvent } from "react";
import * as React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

interface Props {
    handleSubmit: (value: string) => void
  }

  interface State {
    value: string
  }

export class AddTodo extends React.Component<Props,State>{

    /**
     *
     */
    constructor(props:Props) {
        super(props);

        this.state = { value: '' } // Value is empty by default
        this._updateValue = this._updateValue.bind(this)
        this._handleSubmit = this._handleSubmit.bind(this)
     
        
    }
    
    _handleSubmit(e: FormEvent<any>) {

        e.preventDefault()
        if (!this.state.value.trim()) {
          return
        }
    
        this.props.handleSubmit(this.state.value)
        this.setState({ value: '' })
    
    }

    _updateValue(params:any) {
          this.setState({value:params})
      }


    render(){
        const {value} = this.state;
     
        return (
        <div>
             <form onSubmit={this._handleSubmit}>
                <input type="text" value={value} onChange={e => this._updateValue(e.target.value)} />
                <button type="submit">Add todo !</button>
             </form>
        </div>
        );
    }
}



export default connect<any, any, any>(null, {
    handleSubmit: addTodo
  })(AddTodo)