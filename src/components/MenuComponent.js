import React from 'react'
import DishDetail from './DishDetailComponent'
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap'


function Menu(props) {

   const [menuItem, setMenuItem] = React.useState({
      selectedDish: null
   })   
   
   function onDishSelect(dish) {
         setMenuItem({ selectedDish: dish })
         
         console.log(dish)
   }

   
     
   
   const menu = props.dishes.map(dish => { 
   return (
      <div key={dish.id} className="col-12 col-md-5 m-1" onClick={() => onDishSelect(dish)}>
         <Card  >
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
         <DishDetail props={menuItem.selectedDish} />
      </div>
   )
}

export default Menu
