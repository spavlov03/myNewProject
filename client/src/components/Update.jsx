import {useEffect,useState} from 'react'
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom'

const Update = (props) => {
  const {id} = useParams();
  const [firstName,setFirstName] = useState();
  const [lastName,setLastName] = useState();
  const navigate = useNavigate();

  useEffect(()=> { 
    axios.get('http://localhost:8000/api/people/' + id)
      .then(res=> { 
        setFirstName(res.data.firstName); 
        setLastName(res.data.lastName);
      })
      .catch(err=>console.log(err))
  },[])
  const updatePerson = (e) => { 
    e.preventDefault(); 
    axios.put(`http://localhost:8000/api/people/${id}`,{
      firstName,
      lastName
    })
      .then(res => { 
        console.log(res); 
        navigate("/"); 
      })
      .catch(err=>console.log(err))
  }
  return (
    <div>
      <h2>Update A Person</h2>
      <form onSubmit={updatePerson}>
        <p>
          <label>First Name</label>
          <input type="text" name='firstName' value={firstName} onChange={(e)=> {setFirstName(e.target.value)}}/>
        </p>
        <p>
          <label>Last Name</label>
          <input type="text" name='lastName' value={lastName} onChange={(e)=> {setLastName(e.target.value)}}/>
        </p>
        <input type="submit" value="Update"/>
      </form>
    </div>
  )
}

export default Update; 