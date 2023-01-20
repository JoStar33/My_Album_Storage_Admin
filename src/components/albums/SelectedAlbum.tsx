import React from 'react';
import styled from 'styled-components';
import { adminAlbumType } from '../../types/adminAlbum';
import TextField from '@mui/material/TextField';

type propsType = {
  album: adminAlbumType,
  selectedAlbums: adminAlbumType[],
  setSelectedAlbums: React.Dispatch<React.SetStateAction<adminAlbumType[]>>
}

const SelectedAlbum: React.FC<propsType> = ({album, selectedAlbums, setSelectedAlbums}) => {
  const handleOnChangeAlbum = (e: React.ChangeEvent<HTMLInputElement>) => {
    album.header = e.target.value;
    const settedAlbums = selectedAlbums.map(
      selectedAlbum => 
        selectedAlbum.id === album.id 
        ? album 
        : selectedAlbum);
    setSelectedAlbums(settedAlbums);
  }
  const handleOnChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    album.description = e.target.value;
    const settedAlbums = selectedAlbums.map(
      selectedAlbum => 
        selectedAlbum.id === album.id 
        ? album 
        : selectedAlbum);
    setSelectedAlbums(settedAlbums);
  }
  return (
    <SelectedAlbumContainer>
      <SelectedAlbumImage src={album.image}></SelectedAlbumImage>
      <TextField 
        name='header'
        label="Header" 
        color="secondary" 
        focused
        onChange={handleOnChangeAlbum}
      ></TextField>
      <SelectedAlbumDescription
        name='description'
        placeholder="Description" 
        onChange={handleOnChangeDescription}
      >
      </SelectedAlbumDescription>
    </SelectedAlbumContainer>
  );
};

const SelectedAlbumContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: 80%;
  height: 20vh;
  border-radius: 20px;
  margin-top: 2vh;
  margin-bottom: 2vh;
  margin-left: 5%;
`;

const SelectedAlbumImage = styled.img`
  margin-right: 5vh;
  margin-left: 2.5vh;
  width: 15vh;
  height: 15vh;
`;

const SelectedAlbumDescription = styled.textarea`
border: 2px solid black;
border-radius: 10px;
margin-left: 10px;
margin-right: 20px;
width: 50%;
height: 15vh;
resize: none;
`;

export default SelectedAlbum;