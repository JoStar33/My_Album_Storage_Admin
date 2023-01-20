import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { adminState } from '../../../states/atom';

const MainPageViewer: React.FC = () => {
  const adminInfo = useRecoilValue(adminState);
  return (
    <MainPageViewerContainer>
      <h1>반갑습니다. 
        {
          adminInfo.email
        }님 
      </h1>
    </MainPageViewerContainer>
  );
};

const MainPageViewerContainer = styled.div`
width: 90vw;
box-shadow: 0 6px 6px 0 gray;
height: 30vh;
border-radius: 20px;
margin: 40px;
`;

export default MainPageViewer;