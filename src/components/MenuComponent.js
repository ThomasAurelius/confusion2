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
            <div className="row col-12 col-md-5 m-1">
               <Card >
                  <CardImg object src={menuItem.selectedDish.image} alt={menuItem.selectedDish.name} ></CardImg>
                  <CardBody>
                     <CardTitle>{menuItem.selectedDish.name}</CardTitle>
                     <CardText>{menuItem.selectedDish.description}</CardText>
                  </CardBody>
               </Card>
            </div>
         )
      } else {
         return (
            <div></div>
         )
      }
   }

   function renderComments() {
      if (menuItem.selectedDish != null) {
         return (
            <div className="row col-12 col-md-5 m-1">
               <Card  >
                  <CardBody>
                     <CardTitle>
                        <h2>Comments</h2>
                     </CardTitle>
                     <CardBody>
                        {menuItem.selectedDish.comments.map((comment) => {
                           return (
                              <div className="comments" key={comment.id}>
                                 <p><strong>Rating:</strong> {comment.rating}</p>
                                 <p><strong>Comment:</strong> {comment.comment}</p>
                                 <small><em><strong>Author:</strong> {comment.author}</em></small>
                              </div>
                           )
                        })}
                     </CardBody>
                  </CardBody>
               </Card>
            </div>
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
         <div className="row">
            {renderDish()}
            {renderComments()}
         </div>
      </div>
   )
}

export default Menu
