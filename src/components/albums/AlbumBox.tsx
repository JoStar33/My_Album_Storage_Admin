import React from 'react';
import styled from 'styled-components';
import { adminAlbumType } from '../../types/adminAlbum';

type propsType = {
  album: adminAlbumType
}

const AlbumBox: React.FC<propsType> = ({album}) => {
  return (
    <AlbumBoxContainer>
      <AlbumImage src={album.image}></AlbumImage>
    </AlbumBoxContainer>
  );
};

const AlbumBoxContainer = styled.div`
width: 20%;
height: 20vh;
margin-left: 2.5%;
margin-right: 2.5%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
margin-top: 10px;
margin-bottom: 10px;
`;

const AlbumImage = styled.img`
width: 16vh;
height: 16vh;
`;

export default AlbumBox;