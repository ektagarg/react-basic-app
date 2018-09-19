import React from 'react';
import {Card, CardImg, CardTitle, CardText} from 'reactstrap';

    function RenderDish({dish}){
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
    function RenderComments({dish}){
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
    function RenderCommentHeading({dish}){
        if(dish == null){
            return(<div></div>)
        }
        else
        {
            return(<h4 id="head">Comments</h4>)
        }
    }
    const Dishdetail = (props) => {        
        return(
            <div className ="container"> 
                <div className="row">
                    <div className="col-12 col-md-5 m-1">                
                        <RenderDish dish={props.selectedDish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">   
                        <RenderCommentHeading dish={props.selectedDish} /> 
                        <RenderComments dish = {props.selectedDish} />
                    </div>
                </div>
            </div>
            
        );
    }
export default Dishdetail;