import Posts from './Posts';
import Comments from './Comments';
import Users from './Users';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 20px;
  max-width: 100%;
`;

function DataInfo({ data, resourceType, status }) {
  if (status === 'idle') {
    return <Paragraph>Click a button! 👀</Paragraph>;
  } else if (status === 'pending') {
    return <Paragraph>Loading...</Paragraph>;
  } else if (status === 'resolved' && resourceType === 'posts') {
    return <Posts posts={data} />;
  } else if (status === 'resolved' && resourceType === 'comments') {
    return <Comments comments={data} />;
  } else if (status === 'resolved' && resourceType === 'users') {
    return <Users users={data} />;
  } else if (status === 'rejected') {
    return <Paragraph>Uh oh, something went wrong...</Paragraph>;
  }
}

export default DataInfo;
