import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            name:'Bruce',
            age:12,
            skill:'angular'
        },
        {
            name:'kishore',
            age:13,
            skill:'react'
        },
        {
            name:'vakallu',
            age:15,
            skill:'node'
        }
    ]
    const personList= persons.map((person,key) => <Person key={person.name} person={person}/>)
  return (
    <div>
       {personList}
    </div>
  )
}

export default NameList