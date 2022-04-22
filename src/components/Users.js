import styled from 'styled-components';

const UserContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 300px);
  grid-template-columns: repeat(2, 1fr);
  max-width: 780px;
  margin: 0 auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  @media all and (max-width: 780px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const UserCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Thumbnail = styled.div`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  background-color: yellow;
`;

const Name = styled.h4`
  margin-bottom: 0;
`;

const Username = styled.h5`
  margin-top: 0;
`;

function Users({ users }) {
  return (
    <UserContainer>
      {users.map((user) => (
        <UserCard key={user.id}>
          <Thumbnail></Thumbnail>
          <Name>{user.name}</Name>
          <Username>{user.username}</Username>
          <span>{user.email}</span>
        </UserCard>
      ))}
    </UserContainer>
  );
}

export default Users;
