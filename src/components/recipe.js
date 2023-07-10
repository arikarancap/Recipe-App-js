import React from 'react'
import style from './recipes.module.css';
const Recipe = ({ title, calories, ingredients, image, mealType, }) => {
    return (
        <div className={style.recipe} >
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (

                    <li >
                        <div className={style.image}>
                            <img className={style.containerImage} src={ingredient.image} />
                            <p className={style.containerText} >{ingredient.text}</p>
                        </div>
                    </li>
                ))}
            </ol>
            <p> Calories :  {calories}</p>
            <p> CuisineType :  {mealType}</p>
            <img style={{ width: 200, height: 200, borderRadius: 100 }} src={image} alt={title} />
        </div>

    )
}

export default Recipe;