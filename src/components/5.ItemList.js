import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

const Heading = styled.h2`
  color: black;
  // text-align: center;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 70%;
`;

const ListItem = styled.li`
  padding: 8px 50px;
  margin: 5px 0;
  background-color: ${(props) => (props.active ? 'lightblue' : 'white')};
  border: 1px solid lightgray;
  border-radius: 4px;
  cursor: pointer;

  // border-width:70%;
  transition: background-color 0.3s;

  &:hover {
    background-color: lightgray;
  }
`;

const ItemList = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <Container>
      <Heading>Fruits</Heading>
      <List>
        {items.map((item, index) => (
          <ListItem
            key={index}
            active={index === selectedIndex}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ItemList;
