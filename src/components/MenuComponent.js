import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap'


function Menu(props) {

   const [menuItem, setMenuItem] = React.useState({
      selectedDish: null
   })   
   
   function onDishSelect(dish) {
         setMenuItem({ selectedDish: dish })
         renderDish(dish)
         console.log(dish)
   }

   function renderDish() {
      if (menuItem.selectedDish != null) {
         return (
            <Card>
               <CardImg object src={menuItem.selectedDish.image} alt={menuItem.selectedDish.name} ></CardImg>
               <CardBody>
                  <CardTitle>{menuItem.selectedDish.name}</CardTitle>
                  <CardText>{menuItem.selectedDish.description}</CardText>
               </CardBody>
            </Card>
         )
      } else {
         return (
            <div></div>
         )
      }
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
         <div className="row col-12 col-md-5 m-1">
            {renderDish()}
         </div>
      </div>
   )
}

export default Menu
