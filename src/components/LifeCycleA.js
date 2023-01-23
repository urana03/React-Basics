import React, { Component } from 'react'

 class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Uttam'
      }
      console.log('LifeCycleA Constructor')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDrived')
        return null
    }
    componentDidMount(){
        console.log('LifecycleA Didmount')
    }
  render() {
    console.log('LifeCycleA Render')
    return (
      <div>LifeCycleA</div>
    )
  }
}

export default LifeCycleA