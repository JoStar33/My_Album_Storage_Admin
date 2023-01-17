import React, { useState } from 'react';
import styled from 'styled-components';
import AdminAlbumBox from '../../albums/AdminAlbumBox';
import { useRecoilValue } from 'recoil';
import { adminAlbumState } from '../../../states/atom';
import AlbumDialog from '../../dialogs/searchDialogs/AlbumDialog';

const TodaysAlbumForm: React.FC = () => {
  const [dialog, setDialog] = useState(false);
  const adminAlbum = useRecoilValue(adminAlbumState);
  return (
    <TodaysAlbumContainer>
      <AlbumDialog dialog={dialog} setDialog={setDialog}></AlbumDialog>
      <AlbumDialogRow>
        <AlbumDialogButton onClick={()=>setDialog(true)}>앨범 등록</AlbumDialogButton>
      </AlbumDialogRow>
      <AlbumContainer>
        {
          adminAlbum.map(album => 
            <AdminAlbumBox album={album}></AdminAlbumBox>)
        }
      </AlbumContainer>
    </TodaysAlbumContainer>
  );
};

const TodaysAlbumContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`;

const AlbumDialogRow = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
width: 90vw;
height: 50px;
`;

const AlbumContainer = styled.div`
display: flex;
flex-wrap: wrap;
overflow-y: scroll;
::-webkit-scrollbar {
  display: none;
}
`;

const AlbumDialogButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
font-weight: 800;
border-radius: 20px;
width: 90px;
height: 40px;
margin-right: 10px;
background-color: #FDD8FE;
user-select: none;
cursor: pointer;
`;

export default TodaysAlbumForm;