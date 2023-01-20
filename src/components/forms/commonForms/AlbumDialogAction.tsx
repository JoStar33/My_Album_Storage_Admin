import React from 'react';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { adminAlbumType } from '../../../types/adminAlbum';
import { useRecoilValue } from 'recoil';
import { adminState } from '../../../states/atom';
import { useMutation } from 'react-query';
import { postAlbum } from '../../../apis/albumApi';

type propsType = {
  selectedAlbums: adminAlbumType[],
  setSelectedAlbums: React.Dispatch<React.SetStateAction<adminAlbumType[]>>
}

const AlbumDialogAction: React.FC<propsType> = ({selectedAlbums, setSelectedAlbums}) => {
  const adminInfo = useRecoilValue(adminState);
  const { mutate, isLoading, isError, error, isSuccess } = useMutation(() => postAlbum(adminInfo.id, selectedAlbums), {
    onSuccess: (data, variables, context) => {
    },
    onError: (error, variables, context) => {
    },
    onSettled: (data, error, variables, context) => {
    },
  });
  const applyAlbums = () => {
    mutate();
  }
  return (
    <AlbumDialogActionContainer>
      <Stack direction="row" spacing={4}>
        <Button onClick={applyAlbums} size="large" variant="contained" color="success">
          저장
        </Button>
        <Button size="large" variant="outlined" color="error">
          닫기
        </Button>
      </Stack>
    </AlbumDialogActionContainer>
  );
};

const AlbumDialogActionContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;
`;

export default AlbumDialogAction;