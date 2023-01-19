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
  width: 70%;
  height: 20vh;
`;

const SelectedAlbumImage = styled.img`
  margin-left: 2.5vh;
  width: 20vh;
  height: 20vh;
`;

export default SelectedAlbum;