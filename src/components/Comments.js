import styled from 'styled-components';

const CommentContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 250px);
  grid-template-columns: repeat(2, 1fr);
  max-width: 1080px;
  margin: 0 auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  padding: 20px 24px;
  border-radius: 10px;
`;

function Comments({ comments }) {
  return (
    <CommentContainer>
      {comments.map((comment) => (
        <Comment key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
          <span>{comment.email}</span>
        </Comment>
      ))}
    </CommentContainer>
  );
}

export default Comments;
