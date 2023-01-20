import React from 'react';
import Dialog from '@mui/material/Dialog';
import styled from 'styled-components';
import { adminAlbumType } from '../../../types/adminAlbum';

type propsType = {
  dialog: boolean,
  setDialog: React.Dispatch<React.SetStateAction<boolean>>,
  album: adminAlbumType,
  setSearchAlbums: React.Dispatch<React.SetStateAction<adminAlbumType[]>>
};

const SetAlbumDialog: React.FC<propsType> = ({dialog, setDialog, album, setSearchAlbums}) => {
  const handleClose = () => {
    setDialog(false);
  }
  return (
    <Dialog      
      maxWidth={'md'}
      fullWidth
      open={dialog}
      onClose={handleClose}
    >  
      <Centering>
        <SettedAlbumImage src={album.image}></SettedAlbumImage>
        <SettedAlbumTitle></SettedAlbumTitle>
      </Centering>
    </Dialog>
  );
};

const Centering = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SettedAlbumImage = styled.img`
  margin-left: 2.5vh;
  width: 30vh;
  height: 30vh;
`;

const SettedAlbumTitle = styled.input``;

export default SetAlbumDialog;