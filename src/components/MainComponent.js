import React from 'react';
import { DISHES } from './dishes';
import { COMMENTS } from './comments';
import { PROMOTIONS } from './promotions';
import { LEADERS } from './leaders';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import About from './AboutComponent'
import Header from './Header';
import Footer from './Footer';
import { Routes, Route, useParams } from 'react-router-dom';



function Main(props) {  

   const [allState, setAllState] =  React.useState(
      {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
      }
      
)
   const { id } = useParams()
 

   const HomePage = () => {
      return(
         <Home 
            dish={allState.dishes.filter((dish) => dish.featured)[0]}
            promotion={allState.promotions.filter((promo) => promo.featured)[0]}
            leader={allState.leaders.filter((leader) => leader.featured)[0]}
         />
      );
   }
 

   const DishWithId = ({match}) => {
      return (
         <DishDetail 
            dish={allState.dishes.filter((dish) => dish.id === id)[0] } 
            comments={allState.comments.filter((comment) => comment.dishId === id)[0] } 
         />
      )
   }
    

    return (
      <div className="App">
        <Header />         
            <Routes>
               <Route path='/home' element={<HomePage />} />
               <Route exact path='/aboutus' element={<About leaders={allState.leaders} />} />
               <Route exact path='/menu' element={<Menu dishes={allState.dishes} />} /> 
               <Route path='/menu/:dishId' element={<DishWithId />} render={(props) => <DishWithId {...props} />} />
               <Route exact path='/contactus' element={<Contact />} />
            </Routes>
        <Footer />
      </div>
    );
    
}



export default Main;
