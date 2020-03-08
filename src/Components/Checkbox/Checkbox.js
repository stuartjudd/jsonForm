import React, {useState} from 'react'

// For display only at this stage
const CheckBox = ({label, handleCheckboxChange}) => {
    const [check, setCheck] = useState(false);
    const updateChecked = ()=>
    {
        setCheck(!check)
    }
    return (
        <>
        <label> {label}</label>
        <input type="checkbox"             
            checked = {check}
            onChange = {updateChecked} />
        </>
    )
}

export default CheckBox