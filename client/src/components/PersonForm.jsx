import { useState } from 'react'
import axios from 'axios';
const PersonForm = (props) => {
    const {people,setPeople} = props;
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/people', {
            firstName,    // this is shortcut syntax for firstName: firstName,
            lastName      // this is shortcut syntax for lastName: lastName
        })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
                setPeople([...people,res.data]); 
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p className='bg-light p-3 w-25'>
                <label>First Name</label><br/>
                <input type="text" onChange = {(e)=>setFirstName(e.target.value)}/>
            </p>
            <p className='bg-light p-3 w-25'>
                <label>Last Name</label><br/>
                <input type="text" onChange = {(e)=>setLastName(e.target.value)}/>
            </p>
            <input className='btn btn-info ms-5' type="submit"/>
        </form>
    )
}
export default PersonForm;
