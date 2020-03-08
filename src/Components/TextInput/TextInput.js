import React, { useState} from "react"

const TextInput = ({id, name, label, classWrapper, placeholder, validation, required}) => {
    
    const [inputValue, setInputValue] = useState('')
    const [inputValueError, setInputValueError] = useState('')

    const onBlur = () =>
    {
       if (validation){ 
        return validation.map( (rule) => {
            switch (rule.type){
                case "regex":                           
                    const regExp = new RegExp(rule.expression)
                    if (!regExp.test(inputValue)){
                         setInputValueError(rule.message)
                    }
                    break;
                case "required" :
                    if (inputValue.length < 1 )
                         setInputValueError(rule.message)
                    break;
                
                case "age" :  
                    const currentDate = new Date()
                    var dateParts = inputValue.split("/");                    
                    var regDate = new Date(+dateParts[2]+ parseInt(rule.low) , dateParts[1] - 1, +dateParts[0] ) ;                                                          
                    if (currentDate < regDate  )
                        setInputValueError(rule.message)
               break;
                default :
                    break                    
            }
        })           
       }       
    }
    return (
        <div className={classWrapper}>
            <label htmlFor={id}>{label} </label>
            <input 
                id={id}
                type="input"               
                name={name}
                placeholder={placeholder}
                value = {inputValue}
                required = { required ? true : false}
                onChange= {event => setInputValue(event.target.value)}
                onBlur={onBlur}
                onFocus={event => setInputValueError("")}                             
               ></input> 
               <br/>                
                {inputValueError ?  <span className='error'>{inputValueError}</span> : "" }                           
        </div>        
    )
}

export default TextInput;