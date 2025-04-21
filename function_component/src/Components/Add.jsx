import React , { useState } from "react"
import axios  from "axios"
import { Navigate, useNavigate } from 'react-router-dom'

export default function Add(){
    const [title, settitle] = useState('')
    const handlesubmit = (e) => {
    axios.post('http://127.0.0.1:8000/api/tasks/', {title, description}).then(()=>{
        settitle('')
        setDescription('')
        Navigate('/')
    }).catch(error => console.log(error))
    }
    return (
        <div>
            <form action='' onSubmit={handlesubmit}>
                title<input type="text" name="" value={title} onChange={(e) => settitle(e.target)} id=""></input>
                Description<input type="text" name="" value={description} onChange={(e) => setDescription(e)}></input>
                <button className="btn btn-success">Add</button>
            </form>

        </div>
        )
    
    }
