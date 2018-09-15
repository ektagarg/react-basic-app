import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardTitle} from 'reactstrap';
import Dishdetail from './DishdetailComponent';
class Menu extends Component{
    constructor(props) {
        super(props);

        this.state= {
            selectedDish : null
        }
    }

    onDishSelect(dish){
        this.setState( { selectedDish : dish });
    }

    renderDish(dish){
        if ( dish !=null){
            return(
                <Card>
                    <CardImg top width="100%"  src={dish.image} alt={dish.name} />                        
                    <Card> 
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                    </Card>
                </Card>
            )
        }else{
            return(
                <div></div>
            )
        }
    }

    render(){

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key = {dish.id} onClick={()=>  this.onDishSelect(dish) } className="col-12 col-md-5 m-1">
                    <Card>                      
                        <CardImg top width="100%"  src={dish.image} alt={dish.name} />                        
                        <CardImgOverlay> 
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );        
        });

        return(
            <div className ="container">                
                <div className="row">
                        {menu}
                </div>
                <Dishdetail selectedDish= {this.state.selectedDish}></Dishdetail>                        
            </div>
        );
    }
}

export default Menu;