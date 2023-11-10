import React from 'react';
import { shallow } from 'enzyme';
import Square from '../index';

describe('Square', () => {

    it('renders the props.value passed in ', () => {
        const wrapper = shallow(<Square value='X'/>);
        expect(wrapper.find('button').text()).toEqual('X');
    });

    it('calls the click handler when the button is click', () => {
        const onClickHandler = jest.fn();
        const wrapper = shallow(<Square onClick={onClickHandler}/>);

        wrapper.find('button').simulate('click');
        expect(onClickHandler).toHaveBeenCalled()
    });

    //testing functionality of the style changing switches
    it('text turns green and className is "square winning-move" when winner === true', () => {
        const wrapper = shallow(<Square value='X' winner={true} />)
        wrapper.find('button').hasClass('square winning-move')
    })

    it('text color is default and className is "square" when winner == false ', () => {
        const wrapper = shallow(<Square value='X' winner={false} />)
        wrapper.find('button').hasClass('square')
    })

});
