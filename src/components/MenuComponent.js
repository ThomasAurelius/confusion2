import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'

function Menu(props) {

   const [selectedDish, setSelectedDish] = React.useState({
      selectedDish: null
   })   
   

   //why is onDishSelect running on load and not on click?
   function onDishSelect(dish) {
      console.log(dish)  
      //setSelectedDish({ selectedDish: dish })   
   }
   // i need onDishSelect to update state of selectedDish based on which card is clicked.
   
   
   const menu = props.dishes.map(dish => { 

   return (
      <div key={dish.id} className="col-12 col-md-5">
         <Card onClick={onDishSelect(dish)}>
            <CardImg object src={dish.image} alt={dish.name} ></CardImg>
            <CardImgOverlay>
               <CardTitle>{dish.name}</CardTitle>  
            </CardImgOverlay>
         </Card>
      </div>
   )
})

   return (
      <div className='container'>
         <div className='row'>
           
               {menu}
           
         </div>
      </div>
   )
}

export default Menu
