import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap'


function Menu(props) {

   const [selectedDish, setSelectedDish] = React.useState({
      selectedDish: null
   })   
   

   function onDishSelect(dish) {
         setSelectedDish({ selectedDish: dish })
         renderDish(dish)
   }

   function renderDish(dish) {
      if (dish != null) {
         return (
            <Card>
               <CardImg object src={dish.image} alt={dish.name} ></CardImg>
               <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
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
      <div key={dish.id} className="col-12 col-md-5 m-1">
         <Card onClick={() => onDishSelect(dish)}>
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
            {renderDish(selectedDish)}
         </div>
      </div>
   )
}

export default Menu
