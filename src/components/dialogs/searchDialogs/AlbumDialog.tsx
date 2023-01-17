import React from 'react';
import Dialog from '@mui/material/Dialog';
import AlbumDialogController from '../../forms/commonForms/AlbumDialogController';
import styled from 'styled-components';

type propsType = {
  dialog: boolean,
  setDialog: React.Dispatch<React.SetStateAction<boolean>>,
};

const AlbumDialog: React.FC<propsType> = ({dialog, setDialog}) => {
  return (
    <Dialog
      maxWidth={'xl'}
      fullWidth
      open={dialog}
      onClose={() => setDialog(false)}
    >
      <Centering>
        <AlbumDialogController></AlbumDialogController>
        <AlbumViewer></AlbumViewer>
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

const AlbumViewer = styled.div`
  background-color: #E1D5FA;
  border-radius: 20px;
  margin-top: 8px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  width: 90%;
  height: 60vh;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default AlbumDialog;