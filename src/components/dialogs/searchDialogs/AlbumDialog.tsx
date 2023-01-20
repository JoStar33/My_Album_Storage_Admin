import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { adminAlbumType } from '../../../types/adminAlbum';
import AlbumDialogController from '../../forms/commonForms/AlbumDialogController';
import AlbumDialogViewer from '../../forms/commonForms/AlbumDialogViewer';
import SelectedAlbumViewer from '../../forms/commonForms/SelectedAlbumViewer';
import AlbumDialogAction from '../../forms/commonForms/AlbumDialogAction';
import styled from 'styled-components';

type propsType = {
  dialog: boolean,
  setDialog: React.Dispatch<React.SetStateAction<boolean>>,
};

const AlbumDialog: React.FC<propsType> = ({dialog, setDialog}) => {
  const [selectedAlbums, setSelectedAlbums] = useState([] as adminAlbumType[]);
  const [searchAlbums, setSearchAlbums] = useState([] as adminAlbumType[]);
  const handleClose = () => {
    setDialog(false);
    setSearchAlbums([]);
  }
  return (
    <Dialog
      maxWidth={'lg'}
      fullWidth
      open={dialog}
      onClose={handleClose}
    >
      <Centering>
        <SelectedAlbumViewer selectedAlbums={selectedAlbums} setSelectedAlbums={setSelectedAlbums}></SelectedAlbumViewer>
        <AlbumDialogController setSearchAlbums={setSearchAlbums}></AlbumDialogController>
        <AlbumDialogViewer 
          searchAlbums={searchAlbums} 
          setSearchAlbums={setSearchAlbums} 
          selectedAlbums={selectedAlbums} 
          setSelectedAlbums={setSelectedAlbums}
        ></AlbumDialogViewer>
        <AlbumDialogAction selectedAlbums={selectedAlbums} setSelectedAlbums={setSelectedAlbums}></AlbumDialogAction>
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

export default AlbumDialog;