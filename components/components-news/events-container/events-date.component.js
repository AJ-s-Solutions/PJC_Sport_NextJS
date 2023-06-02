// React
import React from 'react';

// Next

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const EventsDate = ({ date }) => {
  return (
    <Date>
      <h4>Date: {date}</h4>
    </Date>
  );
};

export default EventsDate;

const Date = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding-right: 2rem;
`;