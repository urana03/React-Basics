import React, { Component } from 'react'

 class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Uttam'
      }
      console.log('LifeCycleB Constructor')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDrived')
        return null
    }
    shouldComponentUpdate(){
        console.log('lifecycle b should update');
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('Lifecycle B snapshot')
        return null
    }
    changeState = () =>{
        this.setState({
            name:'Uttam Rana'
        })
    }
  render() {
    console.log('LifeCycleB Render')
    return (
        <div>
      <div>{this.setState.name}</div>
      <button onClick={this.changeState}>Change state</button>
      </div>
    )
  }
}