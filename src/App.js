import React from 'react';
import './App.css';

import DynamicForm from './DynamicForm/DynamicForm'
import formData from './Forms/FormTestTextInput.json'

const logData = (formdata)=>{
  console.log("App", formdata)  
}

function App() {
  return (
    <div className="App">
    <DynamicForm formSchema={formData} handleFormSubmit={logData}></DynamicForm>
    </div>
  );
}

export default App;
