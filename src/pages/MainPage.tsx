import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import styled from 'styled-components';
import TodaysAlbumForm from '../components/forms/adminForms/TodaysAlbumForm';
import MainPageControllerForm from '../components/forms/adminForms/MainPageControllerForm';
import { adminState } from '../states/atom';
import { useRecoilState } from 'recoil';
import { setTokenByPost } from '../apis/tokenApi';
import { getToken } from "../apis/tokens/token";
import { useQuery } from 'react-query';

const MainPage: React.FC = () => {
  let isAuthorized = getToken();
  const query = useQuery('token', setTokenByPost)
  return (
    isAuthorized ?
    <AlbumPageContainer>
      <MainPageControllerForm></MainPageControllerForm>
      <Viewer>
        <Routes>
          <Route path='/' element={<TodaysAlbumForm/>}></Route>
          <Route path='user-info'></Route>
          <Route path='black-list'></Route>
        </Routes>
      </Viewer>
    </AlbumPageContainer>
    : <Navigate to="/login"></Navigate>
  );
};

const Centering = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Viewer = styled.div`
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

const AlbumPageContainer = styled(Centering)`
  flex-direction: column;
`;


export default MainPage;