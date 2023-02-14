<<<<<<< HEAD
import React from 'react';
import styled from 'styled-components'
import LoginForm from '../components/commonForms/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <LoginPageContainer>
      <LoginForm></LoginForm>
    </LoginPageContainer>
=======
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
>>>>>>> 426a458ac2f27dd8a4354d21f01ba4a6a50946b7
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