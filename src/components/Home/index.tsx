import React from 'react';
import styled from 'styled-components';
import YoutubeDownloader from '../YoutubeDownloader';

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <YoutubeDownloader />
    </HomeContainer>
  );
};

export default Home; 