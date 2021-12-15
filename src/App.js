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
import NotFound from './pages/NotFound';
// import './App.css';
import './styles/RecipePage.css';

function App() {
  return (
    <BrowserRouter>
      <RecipeProvider>
        <Switch>
          <Route exact path="/recipes-app" component={ Login } />
          <Route exact path="/recipes-app/comidas" component={ Food } />
          <Route exact path="/recipes-app/bebidas" component={ Drinks } />
          <Route exact path="/recipes-app/comidas/:id" component={ FoodRecipes } />
          <Route exact path="/recipes-app/bebidas/:id" component={ DrinkRecipes } />
          <Route
            exact
            path="/recipes-app/comidas/:id/in-progress"
            component={ FoodInProgress }
          />
          <Route
            path="/recipes-app/bebidas/:id/in-progress"
            component={ DrinkInProgress }
          />
          <Route exact path="/recipes-app/explorar" component={ ExploreMenu } />
          <Route exact path="/recipes-app/explorar/comidas" component={ ExploreFoods } />
          <Route exact path="/recipes-app/explorar/bebidas" component={ ExploreDrinks } />
          <Route
            path="/recipes-app/explorar/comidas/ingredientes"
            component={ ExploreFoodsRecipes }
          />
          <Route
            exact
            path="/recipes-app/explorar/bebidas/ingredientes"
            component={ ExploreDrinksRecipes }
          />
          <Route exact path="/recipes-app/explorar/comidas/area" component={ ExploreByPlaces } />
          <Route exact path="/recipes-app/perfil" component={ Profile } />
          <Route path="/recipes-app/receitas-feitas" component={ MadeRecipes } />
          <Route path="/recipes-app/receitas-favoritas" component={ Favorites } />
          <Route to="" component={ NotFound } />
        </Switch>
      </RecipeProvider>
    </BrowserRouter>
  );
}

export default App;
