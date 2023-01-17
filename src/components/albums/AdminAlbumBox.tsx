import React from 'react';
import styled from 'styled-components';
import { adminAlbumType } from '../../types/adminAlbum';

type propsType = {
  album: adminAlbumType
}

const AdminAlbumBox: React.FC<propsType> = ({album}) => {
  return (
    <AdminAlbumContainer>
      <AlbumImage src={album.image}></AlbumImage>
    </AdminAlbumContainer>
  );
};

const AdminAlbumContainer = styled.div`
background-color: #E0D8FF;
margin-left: 5vw;
margin-right: 5vw;
margin-top: 5vh;
margin-bottom: 5vh;
border-radius: 20px;
width: 40vw;
height: 15vh;
display: flex;
align-items: center;
`;

const AlbumImage = styled.img`
width: 11vh;
height: 11vh;
`;

export default AdminAlbumBox;