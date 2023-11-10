import React from 'react';
import { shallow, mount } from 'enzyme';
import NameForm from '../index';

describe('Square', () => {
    let players = {X: "Player X", O: "Player O"};
    const wrapper = mount(<NameForm setPlayers={players} players={players}/>);

    it('renders the props.value passed in ', () => {
        
        expect(wrapper.find('input').exists())
    }); 

    it('renders the different player inputs ', () => {
        
        expect(wrapper.find('.player-x').exists())
        expect(wrapper.find('.player-o').exists())
    }); 

});
