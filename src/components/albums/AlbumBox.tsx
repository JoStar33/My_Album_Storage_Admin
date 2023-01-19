import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { adminAlbumType } from '../../types/adminAlbum';

type propsType = {
  album: adminAlbumType
}

const AlbumBox: React.FC<propsType> = ({album}) => {
  const albumText = useRef<any>(null);
  const [isLineOver, setIsLineOver] = useState(false);
  useEffect(() => {
    const height = albumText.current.clientHeight;
    if (height > 23) {
      setIsLineOver(true);
    }
  }, [album.id]);
  return (
    <AlbumBoxContainer>
      <AlbumImage src={album.image}></AlbumImage>
      <AlbumTitle ref={albumText} isLineOver={isLineOver}>{album.name}</AlbumTitle>
    </AlbumBoxContainer>
  );
};

const AlbumBoxContainer = styled.div`
width: 20%;
margin-left: 2.5%;
margin-right: 2.5%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border-radius: 20px;
margin-top: 10px;
margin-bottom: 10px;
`;

interface AlbumImgType {
  isLineOver: boolean;
}

const AlbumTitle = styled.h2<AlbumImgType>`
display: flex;
justify-content: center;
align-items: center;
font-weight: 900;
font-size: ${(props) => (props.isLineOver ? "6px" : "14px")};
margin-left: 2vh;
margin-right: 2vh;
`;

const AlbumImage = styled.img`
margin-top: 2vh;
width: 16vh;
height: 16vh;
`;

export default AlbumBox;