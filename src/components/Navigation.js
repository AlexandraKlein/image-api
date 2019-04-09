import React, { Component } from 'react';
import styled from 'styled-components';
import navigation from '../navigation';

class Navigation extends Component {

  state = {
    active: 'cupertino'
  };

  handleSelectActive = e =>  this.setState({ active: e.target.id });

  handleGetPosition = () => {

  };

  render() {

    const { active } = this.state;

    const cities = navigation.cities.map(city => {
      return (
        <ListItem
          key={city.section}
          id={city.section}
          className={active === city.section ? 'active' : ''}
          onClick={this.handleSelectActive}
        >
          {city.label}
        </ListItem>
      )
    });

    return (
      <Section>
        <Nav>
          <List>
            { cities }
          </List>
        </Nav>
        <Line/>
      </Section>
    )
  }
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
`;

const Nav = styled.nav`
  padding: 35px 0 20px;
`;

const List = styled.ul`
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
  list-style: none;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -15px;
    width: 100%;
    height: 2px;
    background-color: #A3AAAE;
  }
`;

const ListItem = styled.li`
  display: inline-block;
  margin: 0 3vw;
  color: #A3AAAE;
  cursor: pointer;
  
  &:hover {
    color: #51A0D5;
  }
  
  &.active {
    color: black
  }
`;

const Line = styled.div`
  position: absolute;
  left: 0;
  top: 66px; 
  width: 0;
  height: 2px;
  background-color: gray;
  transition: .3s ease;
  z-index: 1;
`;

export default Navigation;
