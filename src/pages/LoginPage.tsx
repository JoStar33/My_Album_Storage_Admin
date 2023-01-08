import React from 'react';
import styled from 'styled-components'
import LoginForm from '../components/commonForms/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <LoginPageContainer>
      <LoginForm></LoginForm>
    </LoginPageContainer>
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