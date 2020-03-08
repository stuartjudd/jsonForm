import React from 'react'
import {shallow} from 'enzyme'
import TextInput from './TextInput'

// Start Testing Inputs

describe('<TextInput> component',() => {
    it('should render', () => {
        const component = shallow(<TextInput />)
        expect(component).toMatchSnapshot();            
    })
})

describe('<TextInput> component',() => {
    const name = '123'
    it('should render', () => {
        const component = shallow(<TextInput name={name}/>)
        expect(component).toMatchSnapshot();            
    })
})







