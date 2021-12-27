import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './NewStudent.css';


const NewStudent = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
  
      axios.post('http://localhost:7000/student', data)
        .then(res => {
          if (res.data.insertedId) {
            alert('Included A Data, Successfully....Added A New Tourism Place');
            reset();
          }
  
  
        })
  
  
    };




    return (
        <div className='Add-Itam'>
        <h1>Include A Student </h1>
  
        <div className="itam">
          <div className='input_fild'>
  
            <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
              <input {...register("title")} placeholder='Title' />
  
              <textarea {...register("degeneration")} placeholder='Degeneration' />
              
              <input {...register("img")} placeholder='img Url' />
  
              <input type="submit" />
            </form>
          </div>
         
  
        </div>
  
  
  
      </div>
    );
};

export default NewStudent;