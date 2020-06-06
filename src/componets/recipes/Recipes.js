import React, { Component } from 'react';
import Recipe from './Recipe'
import { Consumer } from '../../context'

class Recipes extends Component {

    render() {
        return(
            <Consumer>
                {value => {
                    const { recipes } = value;
                    return (
                        <React.Fragment>
                            {recipes.map(recipe => 
                                <Recipe key={recipe.id} recipe={recipe}/>
                            )}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}

export default Recipes;