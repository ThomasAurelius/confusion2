import React from 'react'
import { Card, CardImg, CardText, CardTitle, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'


function DishDetail(props) {
   console.log(props)

  function RenderDish(props) {
      if (props.dish != null) {
         return (
            <div className="row col-12 col-md-5 m-1">
               <Card>
                  <CardImg object src={props.dish?.image} alt={props.dish?.name} ></CardImg>
                  <CardBody>
                     <CardTitle>{props.dish?.name}</CardTitle>
                     <CardText>{props.dish?.description}</CardText>
                  </CardBody>
               </Card>
            </div>
         )
      } else {
         return (
            <div>EMPTYDISH</div>
         )
      }
   }

   
   
   function RenderComments({ comments }) {
      if (comments != null) {
         return (
            <div className="row col-12 col-md-5 m-1">
               <Card  >
                  <CardBody>
                     <CardTitle>
                        <h2>Comments</h2>
                     </CardTitle>
                     <CardBody>
                        {comments.map((comment) => {
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
      } else {
         return <div>EMPTYCOMMENTS</div>
      }
   }

   
   return (
      <div className="container">
         <div className="row">
            <Breadcrumb>   
               <BreadcrumbItem>
                  <Link to='/menu'>Menu</Link>
               </BreadcrumbItem>
               <BreadcrumbItem active>{props?.dish?.name}</BreadcrumbItem>            
            </Breadcrumb>
            <div className="col-12">
               <h3>{props?.dish?.name}</h3>
               <hr />
            </div>
         </div>
         <div className="row">
            <div className="col-12 col-md-5 m-1">
               <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
               <RenderComments comments={props.comments} />
            </div>
         </div>
      </div>
   )
} 




export default DishDetail