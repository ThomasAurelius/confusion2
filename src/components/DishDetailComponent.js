import React from 'react'
import { Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap'


function DishDetail(props) {
   console.log(props)

  function renderDish() {
      if (props.dish != null) {
         return (
            <div className="row col-12 col-md-5 m-1">
               <Card>
                  <CardImg object src={props.dish.image} alt={props.dish.name} ></CardImg>
                  <CardBody>
                     <CardTitle>{props.dish.name}</CardTitle>
                     <CardText>{props.dish.description}</CardText>
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
      if (props.dish != null) {
         return (
            <div className="row col-12 col-md-5 m-1">
               <Card  >
                  <CardBody>
                     <CardTitle>
                        <h2>Comments</h2>
                     </CardTitle>
                     <CardBody>
                        {props.dish.comments.map((comment) => {
                           return (
                              <div className="comments" key={comment.id}>
                                 <p><strong>Rating:</strong> {comment.rating}</p>
                                 <p><strong>Comment:</strong> {comment.comment}</p>
                                 <small><em><strong>Author:</strong> {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</em></small>
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