import React from 'react';
import styled from 'styled-components';
import CancelIcon from '@mui/icons-material/Cancel';
import { adminAlbumType } from '../../types/adminAlbum';
import { useMutation } from 'react-query';
import { deleteAlbum } from '../../apis/albumApi';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { adminAlbumState } from '../../states/atom';

type propsType = {
  album: adminAlbumType
}

const AdminAlbumBox: React.FC<propsType> = ({album}) => {
  const setRecoilAlbum = useSetRecoilState(adminAlbumState);
  const adminAlbums = useRecoilValue(adminAlbumState);
  const { mutate, isLoading, isError, error, isSuccess } = useMutation(() => deleteAlbum(album.id), {
    onSuccess: () => {
      setRecoilAlbum(adminAlbums.filter(adminAlbum => adminAlbum.id !== album.id));
    }
  });
  const handleDeleteAlbum = () => {
    mutate();
  }
  return (
    <AdminAlbumContainer>
      <AlbumImage src={album.image}></AlbumImage>
      <AlbumHeader>{album.header}</AlbumHeader>
      <DeleteButton onClick={handleDeleteAlbum}>
        <CancelIcon></CancelIcon>
      </DeleteButton>
    </AdminAlbumContainer>
  );
};

const AdminAlbumContainer = styled.div`
background-color: #E0D8FF;
margin-left: 2.5vw;
margin-right: 2.5vw;
margin-top: 2.5vh;
margin-bottom: 2.5vh;
border-radius: 20px;
width: 40vw;
height: 15vh;
display: flex;
align-items: center;
position: relative;
`;

const AlbumImage = styled.img`
margin-left: 2vh;
width: 11vh;
height: 11vh;
`;

const AlbumHeader = styled.div`
font-size: 16px;
font-weight: 800;
`;

const DeleteButton = styled.div`
position: absolute;
top: 6%;
left: 94%;
user-select: none;
cursor: pointer;
`;

export default AdminAlbumBox;