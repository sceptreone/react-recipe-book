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
                            <h1 className="display-4 mb-2"><span className="text-info">Recipe Book</span></h1>
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