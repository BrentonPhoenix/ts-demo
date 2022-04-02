import { Component } from "react";
import SandboxDisplay from './SandboxDisplay'

type Character = {
   
    name: string
  
}
type StateType = {
    characterList: Character[]
}
//                                     props.type, state type
export default class Sandbox extends Component <{},StateType> {
//This file will fetch from the api and pass information into a child component
    constructor(props: any){
        super(props)
        this.state = {
            characterList: []
        }
    }
    //  starAPI: string = 
    componentDidMount(){
        fetch('https://swapi.dev/api/people')
        .then(res=> res.json())
        .then(json =>this.setState({ characterList : json.results})
         )
        .catch(e=> e)
    }

    componentDidUpdate(){
        console.log(this.state.characterList)
    }

    render(){

        return(
            <div>
                <h1>Sandbox Component</h1>
                {
                    this.state.characterList.map((current, index)=>{
                        return(
                            <div>
                            <h4 key={index}>{index} Testing display</h4>
                            <SandboxDisplay key={index}  character={current} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}