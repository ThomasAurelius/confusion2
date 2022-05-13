import React from 'react'
import { DISHES } from './Dishes';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './Header'
import Footer from './Footer'


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
        <Header />      
        <Menu dishes={dishState.dishes} onClick={(dishId) => onDishSelect(dishId)} />
        <DishDetail dish={dishState.selectedDish} />
        <Footer />
      </div>
    );
  
}



export default Main;
