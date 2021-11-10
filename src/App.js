import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import RecipeProvider from './context/RecipeProvider';
import Login from './pages/Login';
import Food from './pages/Foods/Food';
import Drinks from './pages/Drinks/Drinks';
import FoodRecipes from './pages/Foods/FoodRecipes';
import DrinkRecipes from './pages/Drinks/DrinkRecipes';
import FoodInProgress from './pages/Foods/FoodInProgress';
import DrinkInProgress from './pages/Drinks/DrinkInProgress';
import ExploreMenu from './pages/Explore/ExploreMenu';
import ExploreFoods from './pages/Explore/ExploreFoods';
import ExploreDrinks from './pages/Explore/ExploreDrinks';
import ExploreFoodsRecipes from './pages/Explore/ExploreFoodsRecipes';
import ExploreDrinksRecipes from './pages/Explore/ExploreDrinksRecipes';
import ExploreByPlaces from './pages/Explore/ExploreByPlaces';
import Profile from './pages/Profile/Profile';
import Favorites from './pages/Profile/Favorites';
import MadeRecipes from './pages/Profile/MadeRecipes';
import './App.css';

function App() {
  return (
    <RecipeProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/comidas" component={ Food } />
          <Route exact path="/bebidas" component={ Drinks } />
          <Route exact path="/comidas/:id" component={ FoodRecipes } />
          <Route exact path="/bebidas/:id" component={ DrinkRecipes } />
          <Route
            exact
            path="/comidas/:id/in-progress"
            component={ FoodInProgress }
          />
          <Route
            path="/bebidas/:id/in-progress"
            component={ DrinkInProgress }
          />
          <Route exact path="/explorar" component={ ExploreMenu } />
          <Route exact path="/explorar/comidas" component={ ExploreFoods } />
          <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
          <Route
            path="/explorar/comidas/ingredientes"
            component={ ExploreFoodsRecipes }
          />
          <Route
            exact
            path="/explorar/bebidas/ingredientes"
            component={ ExploreDrinksRecipes }
          />
          <Route exact path="/explorar/comidas/area" component={ ExploreByPlaces } />
          <Route exact path="/perfil" component={ Profile } />
          <Route path="/receitas-feitas" component={ MadeRecipes } />
          <Route path="/receitas-favoritas" component={ Favorites } />
        </Switch>
      </BrowserRouter>
    </RecipeProvider>
  );
}

export default App;
