import React, { useState } from 'react';
import styled from 'styled-components';



const Heading = styled.h2`
  color: black;
  padding:10px 150px;
`;

const ListItem = styled.li`
  list-style:none;
   max-width: 60%;
  padding: 8px 50px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${(props) => (props.active ? '#e0f7fa' : '#f9f9f9')};
  

  &:hover {
    background-color: #d7effe;
  }
`;

const HobbyList = ({ hobbies }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div>
      <Heading>Our Hobbies</Heading>
      <ul>
        {hobbies.map((hobby, index) => (
          <ListItem
            key={index}
            active={index === selectedIndex}
            onClick={() => setSelectedIndex(index)}
          >
            {hobby}
          </ListItem>
        ))}
      </ul>
    </div>
  );
};

export default HobbyList;
