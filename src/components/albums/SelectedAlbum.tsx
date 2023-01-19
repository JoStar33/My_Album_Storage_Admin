import React from 'react';
import styled from 'styled-components';
import { adminAlbumType } from '../../types/adminAlbum';

type propsType = {
  album: adminAlbumType,
  setSearchAlbums: React.Dispatch<React.SetStateAction<adminAlbumType[]>>
}

const SelectedAlbum: React.FC<propsType> = ({album, setSearchAlbums}) => {
  return (
    <SelectedAlbumContainer>
      <SelectedAlbumImage src={album.image}></SelectedAlbumImage>
    </SelectedAlbumContainer>
  );
};

const SelectedAlbumContainer = styled.div`
  background-color: white;
  width: 80%;
  height: 20vh;
  border-radius: 20px;
  margin-top: 2vh;
  margin-left: 5%;
`;

const SelectedAlbumImage = styled.img`
  margin-left: 2.5vh;
  width: 20vh;
  height: 20vh;
`;

export default SelectedAlbum;