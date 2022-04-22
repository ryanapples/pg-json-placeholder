import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.active ? 'black' : 'white')};
  border: none;
  border-radius: 3px;
  color: ${(props) => (props.active ? 'white' : 'black')};
  font-size: 18px;
  margin: 0 7px;
  padding: 10px 15px;
  text-transform: capitalize;
  transition: all 0.2s ease-in-out;
  &:hover,
  &:active {
    background-color: #000000;
    color: #ffffff;
    cursor: pointer;
  }
`;

const buttonCategories = ['posts', 'comments', 'users'];

function ButtonNav({ handleClick, resourceType }) {
  return (
    <Div>
      {buttonCategories.map((item, index) => (
        <Button
          key={index}
          onClick={handleClick}
          active={resourceType === item ? true : false}
        >
          {item}
        </Button>
      ))}
    </Div>
  );
}

export default ButtonNav;
