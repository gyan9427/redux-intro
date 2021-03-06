import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:{
                break;
            }
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 8" clicked={this.props.onSubCounter}  />
                <hr/>
                <button onClick= {()=>this.props.onStoreResult(this.props.ctr)}>store</button>
                <ul>
                    {this.props.storedResults.map(result => (
                        <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results,
    };
};

const mapActionToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type:"INCREMENT"}),
        onDecrementCounter: () => dispatch({type:"DECREMENT"}),
        onAddCounter: () => dispatch({type:"ADD",value: 10}),
        onSubCounter: () => dispatch({type:"SUB", value: 8}),
        onStoreResult: (result) => dispatch({type:"STORE_RESULT", result: result}),
        onDeleteResult: (id) => dispatch({type:"DELETE_RESULT",resultElId: id})
    };
};

export default connect(mapStateToProps,mapActionToProps)(Counter);