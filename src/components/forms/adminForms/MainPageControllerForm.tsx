import React from 'react';
import styled from 'styled-components';
import HeadsetIcon from '@mui/icons-material/Headset';
import PersonIcon from '@mui/icons-material/Person';
import ErrorIcon from '@mui/icons-material/Error';

const MainPageControllerForm: React.FC = () => {
  return (
    <ButtonContainer>
      <DefaultButton>
        <HeadsetIcon></HeadsetIcon>
        오늘의 앨범 선정
      </DefaultButton>
      <DefaultButton>
        <PersonIcon></PersonIcon>
        유저 정보 조회
      </DefaultButton>
      <DefaultButton>
        <ErrorIcon></ErrorIcon>
        블랙리스트 조회
      </DefaultButton>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90vw;
  border-radius: 20px;
  background-color: #D4D3F2;
  box-shadow: 0 6px 6px 0 gray;
  font-weight: 800;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Centering = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DefaultButton = styled(Centering)`
  background-color: #DCB9F8;
  width: 200px;
  height: 50px;
  border-radius: 20px;
  font-weight: 800;
  user-select: none;
  cursor: pointer;
`;

export default MainPageControllerForm;