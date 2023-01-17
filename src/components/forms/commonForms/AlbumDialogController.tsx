import React from 'react';
import styled from 'styled-components';

const AlbumDialogController: React.FC = () => {
  return (
    <DialogControllerContainer>
      <SearchAlbumButton>앨범 검색</SearchAlbumButton>
    </DialogControllerContainer>
  );
};

const Centering = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DialogControllerContainer = styled.div`
width: 90%;
height: 10vh;
border-radius: 20px;
background-color: #E1D5FA;
display: flex;
justify-content: flex-end;
align-items: center;
`;

const SearchAlbumButton = styled(Centering)`
margin-right: 20px;
width: 200px;
height: 70%;
font-size: 20px;
font-weight: 800;
border-radius: 20px;
background-color: #CFE8FF;
user-select: none;
cursor: pointer;
`;

export default AlbumDialogController;