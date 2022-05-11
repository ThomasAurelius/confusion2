import React from 'react'
import { Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap'


function DishDetail({props}) {

  function renderDish() {
      if (props.selectedDish != null) {
         return (
            <div className="row col-12 col-md-5 m-1">
               <Card >
                  <CardImg object src={props.selectedDish.image} alt={props.selectedDish.name} ></CardImg>
                  <CardBody>
                     <CardTitle>{props.selectedDish.name}</CardTitle>
                     <CardText>{props.selectedDish.description}</CardText>
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
      if (props.selectedDish != null) {
         return (
            <div className="row col-12 col-md-5 m-1">
               <Card  >
                  <CardBody>
                     <CardTitle>
                        <h2>Comments</h2>
                     </CardTitle>
                     <CardBody>
                        {props.selectedDish.comments.map((comment) => {
                           return (
                              <div className="comments" key={comment.id}>
                                 <p><strong>Rating:</strong> {comment.rating}</p>
                                 <p><strong>Comment:</strong> {comment.comment}</p>
                                 <small><em><strong>Author:</strong> {comment.author}</em>, {comment.date.split('T')[0]}</small>
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

   return (
      <div className="row">
         {renderDish()}
         {renderComments()}
      </div>
   )
}



export default DishDetail