import React,{Component}  from 'react';
import cats from './cats';
import List from './List'
import dogs from './dogs'
import { emptyStatement } from '@babel/types';

class App extends Component{
constructor(props){
    super(props)
        this.state={animal: true}
    
}
handlClick(){
    this.setState({animal : !this.state.animal})
}
//Access the cats array via this.props, and render an unordered list of
//cat images using array.map().
render(){
    return(<div><button onClick ={()=> this.handleClick()}>Change Button</button>
    
{this.state.animal? (
    <List animal ={cats}/>):(
    <List animal ={dogs}/>)}
        

   

    </div>)
}
}
export default App