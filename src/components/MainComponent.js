import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from './Dishes';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';


function Main() {

  const [dishState, setDishState] = React.useState(
     {
     dishes: DISHES,
     selectedDish: null
      }
   )

   function onDishSelect(dishId) {
      setDishState({ ...dishState, 
                  selectedDish: dishId })
      console.log(dishId)
      console.log(dishState)
   }

    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>        
        <Menu dishes={dishState.dishes} onClick={(dishId) => onDishSelect(dishId)} />
        <DishDetail dish={dishState.selectedDish} />
      </div>
    );
  
}



export default Main;
