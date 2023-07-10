import { useEffect, useState } from 'react';
import './App.css';
import Recipe from './components/recipe';
const App = () => {
  const APP_ID = 'cd9c5bba';
  const APP_KEY = '7450577f4b1de0d6cf8c10ba577fef95';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  useEffect(() => {
    GetRecipes()
  }, [query]);

  const GetRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  }
  const GetSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }
  const UpdateSearch = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div className="App">
      <div className='header'>
        <img className='logo' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4JBCxw2YyG_hjpOQ67xKEXvsrHvX4QSuIKbRN0enR_0RyMsATX6GZPGc68mDLzzo8_U&usqp=CAU'} />
        <h1 className='logoTitle' >Tasty Accent</h1>

      </div>
      <form
        onSubmit={GetSearch}
        className='search-form' >
        <input className="search-bar" type="text"
          value={search}
          onChange={UpdateSearch}
        />
        <button className='search-button' type="submit"  > Search</button>
        {/* <p>{search}</p> */}

      </form>
      <div className='recipes' >
        {recipes.map(recipe => (
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} //array
            mealType={recipe.recipe.mealType} //array
          />
        ))}
      </div>
    </div>
  );
}

export default App;
