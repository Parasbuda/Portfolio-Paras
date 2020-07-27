import React, { Component } from 'react'
import Form from "./Component/Form"
import List from "./Component/List"
import uuid from "uuid"
export class App extends Component {
  state={
    fruits:[],
    fruit:"",
    id:uuid(),
    edit:false
  }
  handleChange=(e)=>{
    this.setState({
      fruit:e.target.value
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault()
    const newfruit={
      fruit:this.state.fruit,
      id:this.state.id
    }
   const update=[...this.state.fruits,newfruit]
   this.setState({
     fruits:update,
     fruit:"",
     id:uuid(),
     edit:false
   })
  }
  handleClear=()=>{
    this.setState({
      fruits:[]
    })
  }
  handleDelete=(id)=>{
    const filtered= this.state.fruits.filter(filler=>{
      return(
        filler.id!==id
      )
    })
    this.setState({
      fruits:filtered,
    })
  }
  handleEdit=(id)=>{
    const filtered =this.state.fruits.filter(filler=>{
      return(
        filler.id!== id
      )
    })
    const selected=this.state.fruits.find(filler=>{
      return(
        filler.id=== id
      )
    })
    this.setState({
      fruits:filtered,
      fruit:selected.fruit,
      id:id,
      edit:true
    })
  }
  render() {
    return (
      <div className="container">
        <h5 className="center blue-text"> Welcome To Fruits List </h5>
        <Form 
        edi={this.state.edit}
        sub={this.handleSubmit}
        input={this.state.fruit}
        chan={this.handleChange}/>
        <List fruits={this.state.fruits}
        delet={this.handleDelete}
        edit={this.handleEdit}
        clear={this.handleClear}/>
        
      </div>
    )
  }
}

export default App
