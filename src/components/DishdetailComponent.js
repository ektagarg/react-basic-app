import React,{Component} from 'react';
import {Card, CardImg, CardTitle, CardText} from 'reactstrap';

class Dishdetail extends Component{
    constructor(props){
        super(props);
    }
    renderDish(dish){
        if(!dish){
            return(
                <div></div>
            )
        }else{
            return(
            <Card>
                <CardImg top width="100%"  src={dish.image} alt={dish.name}></CardImg>
                <Card>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </Card>
            </Card>
            )
        }
    }
    renderComments(dish){
        if(dish == null){
            return(<div></div>)
        }
        else
        {               
            return(                                        
               dish.comments.map((comment)=>{                           
                   return(                                                 
                        <ul id="list" key={comment.id} > 
                            <li>{comment.comment}</li>
                            <li>-- {comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                        </ul>                   
                   );
                })        
            );                   
        }
    }
    renderCommentHeading(){
        if(this.props.selectedDish == null){
            return(<div></div>)
        }
        else
        {
            return(<h4 id="head">Comments</h4>)
        }
    }
    render(){        
        return(
            <div className ="container"> 
                <div className="row">
                    <div className="col-12 col-md-5 m-1">                
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">   
                        {this.renderCommentHeading()}  
                        {this.renderComments(this.props.selectedDish)}               
                    </div>
                </div>
            </div>
            
        );
    }
}
export default Dishdetail;