import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ['Asif','Aadil','Ali']
    // const namelist = names.map(name => <h1>{name}</h1>)
    // return <div>{namelist}</div>
    const persons = [
        {
            id: 1,
            name: 'Asif',
            age: 20,
            skills: 'React'
        },
        {
            id: 2,
            name: 'Aadil',
            age: 22,
            skills: 'Angular'
        },
        {
            id: 3,
            name: 'Ali',
            age: 25,
            skills: 'Vue'
        }
    ]
    const personlist = persons.map((person,index) => <Person key={index}   person={person} index={index} />)
    return <div>{personlist}</div>
}

export default NameList