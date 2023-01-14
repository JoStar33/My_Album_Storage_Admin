import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import styled from 'styled-components';
import { getToken } from "../apis/tokens/token";

const MainPage: React.FC = () => {
  let isAuthorized = getToken();
  return (
    isAuthorized ?
    <AlbumPageContainer>
      <ButtonContainer>
        <DefaultButton>
          오늘의 앨범 선정
        </DefaultButton>
        <DefaultButton>
          유저 정보 조회
        </DefaultButton>
        <DefaultButton>
          블랙리스트 조회
        </DefaultButton>
      </ButtonContainer>
      <UserAlbumViewer>
        <Routes>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </UserAlbumViewer>
    </AlbumPageContainer>
    : <Navigate to="/login"></Navigate>
  );
};

const Centering = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserAlbumViewer = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  width: 90vw;
  height: 70vh;
  border-radius: 20px;
  margin-bottom: 30vh;
  box-shadow: 0 6px 6px 0 gray;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
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

const DefaultButton = styled(Centering)`
  background-color: #DCB9F8;
  width: 200px;
  height: 50px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 20px;
  font-weight: 800;
  box-shadow: 0 6px 6px 0 gray;
  user-select: none;
  cursor: pointer;
`;

const AlbumPageContainer = styled(Centering)`
  flex-direction: column;
`;


export default MainPage;