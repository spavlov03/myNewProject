import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"

const PersonList = (props) => {
  const {removeFromDom,people,setPeople} = props;
  const deletePerson = (personId) => { 
    axios.delete(`http://localhost:8000/api/people/${personId}`)
      .then(res => { 
        removeFromDom(personId)
      })
      .catch(err=>console.log(err))
  }

  useEffect(() => { 
    axios.get("http://localhost:8000/api/people")
    .then((res)=> { 
      console.log(res.data);
      setPeople(res.data); 
    })
    .catch((err)=> { 
      console.log(err);
    })
  },[])
  return (
    <div className='d-flex'>
      {
        people.map((person,index) => { 
          return <div className='border w-25 border-dark p-1' key={index}> 
          <p>{person.lastName}</p> 
          <p>{person.firstName}</p>
          <Link to={`/people/${person._id}`}> {person.firstName}'s Page!</Link> <br/><br/>
          <Link to={`/people/edit/${person._id}`}>Edit {person.firstName}'s Profile!</Link><br/><br/>
          <button onClick={(e)=> {deletePerson(person._id)}}>Delete</button>
          </div>
        })
      }
    </div>
  )
}

export default PersonList;