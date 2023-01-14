import React, { useState } from 'react';
import styled from 'styled-components'
import ErrorDialog from '../../dialogs/commonDialogs/ErrorDialog';
import { validateEmail, validatePassword } from '../../../utils/validate';
import { useNavigate } from "react-router-dom";
import { Stack, TextField, CardContent, Card, Button } from '@mui/material';
import { useMutation } from "react-query";
import { login } from '../../../apis/adminApi';

const LoginForm: React.FC = () => {
  const [dialog, setDialog] = useState(false);
  const [validations, setValidations] = useState({
    email: {
      text: "",
      error: false
    },
    password: {
      text: "",
      error: false
    },
  })
  const [account, setAccount] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const { mutate, isLoading, isError, error, isSuccess } = useMutation(() => login(account.email, account.password), {
    onSuccess: (data, variables, context) => {
      navigate('/');
    },
    onError: (error, variables, context) => {
      console.log(error);
      setDialog(true);
    },
    onSettled: (data, error, variables, context) => {
      // I will fire first
    },
  });
  const handleLogin = (account: {
    email: string,
    password: string
  }) => {
    if(!validations.email.error && !validations.password.error)
      mutate()
  };
  const onChangeAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({...account, [e.target.name]: e.target.value});
    e.target.name === 'password'
      ? passwordCheck(e.target.value)
      : emailCheck(e.target.value)
  };
  const emailCheck = (email: string) => {
    validateEmail(email)
    ? setValidations({...validations, email: {
      text: '',
      error: false
    }})
    : setValidations({...validations, email: {
        text: '이메일 형식에 맞지않습니다. 다시 입력해주세요.',
        error: true
      }
    })
  }
  const passwordCheck = (password: string) => {
    validatePassword(password)
    ? setValidations({...validations, password: {
        text: '',
        error: false
      }
    })
    : setValidations({...validations, password: {
      text: '비밀번호는 특수문자, 영문 대소문자, 숫자가 포함된 9자~16자로 입력해주세요.',
      error: true
    }})
  }
  return (
    <>
      <ErrorDialog dialog={dialog} setDialog={setDialog}></ErrorDialog>
      <Card sx={{ width: 500 }}>
        <CardContent>
          <LoginText>로그인</LoginText>
          <TextField
            onChange={onChangeAccount}
            name='email'
            error={validations.email.error}
            value={account.email}
            helperText={validations.email.text}
            fullWidth sx={{ m: 1 }}
            required
            label="이메일"
            variant="standard"
          />
          <TextField
            onChange={onChangeAccount}
            name='password'
            error={validations.password.error}
            value={account.password}
            helperText={validations.password.text}
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
            onClick={() => handleLogin(account)}
            color="primary" 
            size="large" 
            variant="contained"
          >로그인</Button>
        </Stack>
        <NullSpace></NullSpace>
      </Card>
    </>
  );
};

const LoginText = styled.h1`
text-align: center;
`;

const NullSpace = styled.div`
  margin-bottom: 20px;
`

export default LoginForm;