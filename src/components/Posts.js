import styled from 'styled-components';

const PostItem = styled.div`
  background-color: white;
  padding: 30px;
  max-width: 600px;
  margin: 0 auto 24px;
  border-radius: 10px;
`;

function Posts({ posts }) {
  return (
    <div>
      {posts.map((item) => (
        <PostItem key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </PostItem>
      ))}
    </div>
  );
}

export default Posts;
