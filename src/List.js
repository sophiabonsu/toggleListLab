import React,{Component} from 'react';



class List extends Component{
    constructor(props){
        super(props);
        this.state = {};
        
    }
    render(){
        return(
        <div>
            
            <ul>
            {this.props.animal.map(el => <li>
                <img src ={el.image}/>
                {el.name}

                </li>)}
                </ul>
            </div>
    
        )
    }
}
    
export default List;

