import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'DELETE_RECIPE':
            return{
                ...state,
                recipes: state.recipes.filter(recipe => recipe.id !== action.payload) 
            }
        default:
            return state; 
    }
}

export class Provider extends Component {
    state = {
        recipes: [
            {
                id: 1,
                name:'Egg Omellete',
                ingredients: 'Egg, Tomato, Green Chili',
                method: 'Cook an egg'
            },
            {
                id: 2,
                name:'Egg Omellete',
                ingredients: 'Egg, Tomato, Green Chili',
                method: 'Cook an egg'
            },
            {
                id: 3,
                name:'Egg Omellete',
                ingredients: 'Egg, Tomato, Green Chili',
                method: 'Cook an egg'
            }
        ],
        dispatch: action => this.setState(state => reducer(state,action))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;