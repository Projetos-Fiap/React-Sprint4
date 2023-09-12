import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  padding: 8px 20px;
  border-radius: 10px;
  background: #263243;
  color: #fff;
  border: 2px solid #fff;
  margin: 0 1em;
  transition: all 0.3s ease-out; /* Transition for all properties */

  &:hover {
    background: #17cf97; /* Change background color on hover */
    color: #242424; /* Change text color on hover */
    border: 2px solid transparent;
    transition: 250ms; /* Transition duration for hover effect */
  }
`;
