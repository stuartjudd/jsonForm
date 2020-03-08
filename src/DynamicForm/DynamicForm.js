import React, { useRef, useState } from 'react'
import TextInput from '../Components/TextInput/TextInput'
import CheckBox from '../Components/Checkbox/Checkbox'

const DynamicForm = ({formSchema, handleFormSubmit}) => {
    
    const nameForm = useRef(null);    
    const [error, setError] = useState(false)
    
    // Get the dynamic form elements and pass them up to the main component
    const handleSubmit = (event) => {
        event.preventDefault()   
        const form = nameForm.current
        const dict = {};        
        // check for errors to disable button            
        formSchema.Schema.forEach( (element) => {                               
                dict[`${element.name}`] =  form[`${element.name}`].value
        });               
        handleFormSubmit(dict);                     
     
    }

    const handleError = () =>{
        setError(true)
    }
      
    const createdForm = formSchema.Schema.map( (item, index) =>{        
      if (item.type === "TextInput"){
           return <TextInput 
            name={item.name}  
            id ={`input-${index}`}      
            key= {`input-${index}`}          
            required={item.required ? "true" : "false"} 
            label={item.label} 
            classWrapper={item.style ? item.style : "dynamic" }
            placeholder={item.placeholder}  
            validation={item.validation}        
            handleError= { handleError } 
            />
        }
        else if (item.type === "Checkbox"){
          return  <CheckBox key={index} label={item.label} ></CheckBox>
        }                 
        else{
           return  <>To Be implemented soon</>   
        }        
    })
    

    return (
        <div className="App">
        <h2>{formSchema.FormName}</h2>
            <form ref={nameForm} onSubmit={handleSubmit}> 
                {createdForm}
                <button onClick={handleSubmit} disabled={error}>Submit</button>
            </form>
        </div>
    )
}

export default DynamicForm