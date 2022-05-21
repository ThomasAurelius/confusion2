import React, { Component } from 'react';
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
import { Routes, Route, Navigate } from 'react-router-dom';



class Main extends Component {
constructor() {
   super()

   this.state = 
      {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
      }
      console.log(this.state)
}
render() {
   const HomePage = () => {
      return(
         <Home 
            dish={this.state.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
            leader={this.state.leaders.filter((leader) => leader.featured)[0]}
         />
      );
   }
 

   const DishWithId = ( { match } ) => {
      return (
         <DishDetail 
            dish={this.state.dishes.filter((dish) => dish.id === parseInt(match?.params?.dishId,10))[0] } 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match?.params?.dishId,10))[0] } 
         />
      )
   }
    

    return (
      <div className="App">
        <Header />      
            <Routes>
               <Route path='/home' element={<HomePage />} />
               <Route exact path='/aboutus' element={<About leaders={this.state.leaders} />} />
               <Route exact path='/menu' element={<Menu dishes={this.state.dishes} />} /> 
               <Route path='/menu/:dishId' element={<DishWithId />} />
               <Route exact path='/contactus' element={<Contact />} />
            </Routes>
        <Footer />
      </div>
    );
    }
}



export default Main;
