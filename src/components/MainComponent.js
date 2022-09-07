import React from 'react';

import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import About from './AboutComponent'
import Header from './Header';
import Footer from './Footer';
import { Switch, Route, useParams, useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
      return {
         dishes: state.dishes,
         comments: state.comments,
         promotions: state.promotions,
         leaders: state.leaders
      }
   }

function Main(props) {  

   const HomePage = () => {
      return(
         <Home 
            dish={props.dishes.filter((dish) => dish.featured)[0]}
            promotion={props.promotions.filter((promo) => promo.featured)[0]}
            leader={props.leaders.filter((leader) => leader.featured)[0]}
         />
      );
   }
 

   const DishWithId = () => {
      const { id } = useParams();
      const dish = props.dishes.find((dish) => dish.id === Number(id));
      const comments = props.comments.filter((comment) => comment.dishId === Number(id));
      return (
         <DishDetail 
            dish={dish} 
            comments={comments} 
         />
      )
   }

   

    return (
      <div className="App">
        <Header />         
            <Switch>
               <Route path='/home' component={HomePage} />
               <Route exact path='/aboutus' component={() => <About leaders={props.leaders} />} />
               <Route exact path='/menu' component={() => <Menu dishes={props.dishes} />} /> 
               <Route path='/menu/:id' component={DishWithId}  />
               <Route exact path='/contactus' component={Contact} />
            </Switch>
        <Footer />
      </div>
    );
    
}



export default Main;
