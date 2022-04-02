import { Component } from "react";

type Character = {
  
    name: string
  
}

type PropsType = {
    character: Character
    
}

export default class SaDisplay extends Component<PropsType, {}>{
    constructor(props:PropsType){
        super(props)
    }
    render(){
        return(
            <div>
            <h4>{this.props.character.name}</h4>
       
            </div>
        )
        }
}