import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { adminAlbumType } from '../../types/adminAlbum';
import SelectedForm from '../forms/commonForms/SelectedForm';

type propsType = {
  album: adminAlbumType,
  searchAlbums: adminAlbumType[],
  setSearchAlbums: React.Dispatch<React.SetStateAction<adminAlbumType[]>>
}

const AlbumBox: React.FC<propsType> = ({album, searchAlbums, setSearchAlbums}) => {
  const albumText = useRef<any>(null);
  const [isLineOver, setIsLineOver] = useState(false);
  useEffect(() => {
    const height = albumText.current.clientHeight;
    if (height > 23) {
      setIsLineOver(true);
    }
  }, [album.id]);
  const handleAlbumSelect = () => {
    const selectedAlbums = searchAlbums.map(searchAlbum => {
      if(album.id === searchAlbum.id)
        searchAlbum.isSelected = !album.isSelected
      return searchAlbum;
    })
    setSearchAlbums(selectedAlbums);
  }
  return (
    <AlbumBoxContainer onClick={handleAlbumSelect}>
      {
        album.isSelected && <SelectedForm></SelectedForm>
      }
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
position: relative;
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