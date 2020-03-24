import React from 'react';
import ReactDom from 'react-dom';
import App from '../src/app';
import Enzyme from 'enzyme'
import Adopter from 'enzyme-adapter-react-16'


Enzyme.configure({adapter: new Adopter()})


describe('Get Root Cooupon', () => {
    it('Reander with three list', () => {
        const div = document.createElement('div')
        ReactDom.render(<App />, div)
    });
    describe('', () => {
        
    })
    
})
