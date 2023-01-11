import React, { useEffect, useState } from 'react';
import { login } from '../../apis/adminApi';
import styled from 'styled-components'
import { Stack, TextField, CardContent, Card, Button } from '@mui/material';
import { useMutation } from "react-query";

const LoginForm: React.FC = () => {
  const [account, setAccount] = useState({
    email: "",
    password: ""
  });
  useEffect(() => {
    console.log(import.meta.env);
  })
  const { mutate, isLoading, isError, error, isSuccess } = useMutation(() => login(account.email, account.password));
  const handleLogin = () => {
    mutate()
  };
  const onChangeAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({...account, [e.target.name]: e.target.value});
  };
  return (
    <Card sx={{ minWidth: 175 }}>
      <CardContent>
        <LoginText>로그인</LoginText>
        <TextField
          onChange={onChangeAccount}
          name='email'
          value={account.email}
          fullWidth sx={{ m: 1 }}
          required
          label="이메일"
          variant="standard"
        />
        <TextField
          onChange={onChangeAccount}
          name='password'
          value={account.password}
          fullWidth sx={{ m: 1 }}
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
      </CardContent>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Button 
          onClick={handleLogin}
          color="primary" 
          size="large" 
          variant="contained"
        >로그인</Button>
      </Stack>
      <NullSpace></NullSpace>
    </Card>
  );
};

const LoginText = styled.h1`
text-align: center;
`;

const NullSpace = styled.div`
  margin-bottom: 20px;
`

export default LoginForm;