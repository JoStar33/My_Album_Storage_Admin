import React from 'react';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { adminAlbumType } from '../../../types/adminAlbum';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { adminAlbumState, adminState } from '../../../states/atom';
import { useMutation } from 'react-query';
import { postAlbum } from '../../../apis/albumApi';

type propsType = {
  setDialog: React.Dispatch<React.SetStateAction<boolean>>,
  selectedAlbums: adminAlbumType[],
  setSelectedAlbums: React.Dispatch<React.SetStateAction<adminAlbumType[]>>
}

const AlbumDialogAction: React.FC<propsType> = ({selectedAlbums, setSelectedAlbums, setDialog}) => {
  const adminInfo = useRecoilValue(adminState);
  const adminAlbum = useRecoilValue(adminAlbumState);
  const setRecoilAlbum = useSetRecoilState(adminAlbumState);
  const { mutate } = useMutation(() => postAlbum(adminInfo.id, selectedAlbums), {
    onSuccess: (data, variables, context) => {
      setRecoilAlbum([...adminAlbum, ...selectedAlbums]);
      closeDialog();
    },
    onError: (error, variables, context) => {
      console.log(error);
    }
  });
  const closeDialog = () => {
    setDialog(false);
    setSelectedAlbums([]);
  }
  return (
    <AlbumDialogActionContainer>
      <Stack direction="row" spacing={4}>
        <Button 
          onClick={() => mutate()} 
          size="large" 
          variant="contained" 
          color="success"
        >
          저장
        </Button>
        <Button 
          onClick={closeDialog} 
          size="large" 
          variant="outlined" 
          color="error"
        >
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