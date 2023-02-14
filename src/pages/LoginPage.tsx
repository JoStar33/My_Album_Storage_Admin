import React, { useEffect } from 'react';
import styled from 'styled-components'
import Cookies from 'universal-cookie';
import LoginForm from '../components/forms/commonForms/LoginForm';
import { Navigate } from "react-router-dom";
import { getToken } from "../apis/tokens/token";

const LoginPage: React.FC = () => {
  const cookies = new Cookies();
  const isAuthorized = getToken();
  useEffect(() => {
    if(!isAuthorized) {
      cookies.remove('connect.sid');
    }
  });
  return !isAuthorized || isAuthorized === null ? (
    <LoginPageContainer>
      <LoginForm></LoginForm>
    </LoginPageContainer>
  ) : (
    <Navigate to="/" />
  );
};

const LoginPageContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;

export default LoginPage;