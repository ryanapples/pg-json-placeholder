import { useState, useEffect } from 'react';
import ButtonContainer from './ButtonContainer';
import DataInfo from './DataInfo';

import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
  padding-top: 30px;
`;

const Section = styled.section`
  max-width: 1127px;
  margin: 0 auto;
`;

const Header = styled.section`
  color: #fff;
  font-size: 33px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SectionData = styled.section`
  background-color: #228b22;
`;

function App() {
  const [resourceType, setResourceType] = useState('');
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('idle');

  const handleClick = ({ target }) => {
    const { innerText: value } = target;
    const query = value.toLowerCase();
    setResourceType(query);
  };

  useEffect(() => {
    let didCancel = false;

    const fetchResource = async () => {
      setStatus('pending');
      try {
        const url = `https://jsonplaceholder.typicode.com/${resourceType}?&_limit=30`;
        const response = await fetch(url);
        const results = await response.json();
        if (!didCancel) {
          setTimeout(() => {
            setData(results);
            setStatus('resolved');
          }, 1000);
        }
      } catch (error) {
        if (!didCancel) {
          setStatus('rejected');
        }
      }
    };

    if (resourceType) {
      fetchResource();
    }

    return () => {
      didCancel = true;
    };
  }, [resourceType]);

  return (
    <AppContainer>
      <Section>
        <Header>JSON Placeholder API</Header>
        <ButtonContainer
          handleClick={handleClick}
          resourceType={resourceType}
        />
      </Section>
      <SectionData>
        <DataInfo data={data} resourceType={resourceType} status={status} />
      </SectionData>
    </AppContainer>
  );
}

export default App;
