import React from 'react';
import styled from 'styled-components';
import AlbumBox from '../../albums/AlbumBox';
import { adminAlbumType } from '../../../types/adminAlbum';

type propsType = {
  searchAlbums: adminAlbumType[],
  setSearchAlbums: React.Dispatch<React.SetStateAction<adminAlbumType[]>>,
  selectedAlbums: adminAlbumType[],
  setSelectedAlbums: React.Dispatch<React.SetStateAction<adminAlbumType[]>>
}

const AlbumDialogViewer: React.FC<propsType> = ({searchAlbums, setSearchAlbums, selectedAlbums, setSelectedAlbums}) => {
  return (
    <AlbumViewer>
      {
        searchAlbums.map(album => 
          <AlbumBox 
            album={album} 
            searchAlbums={searchAlbums} 
            setSearchAlbums={setSearchAlbums}
            selectedAlbums={selectedAlbums}
            setSelectedAlbums={setSelectedAlbums}
          ></AlbumBox>)
      }
    </AlbumViewer>
  );
};

const AlbumViewer = styled.div`
  background-color: #E1D5FA;
  border-radius: 20px;
  margin-top: 8px;
  margin-bottom: 5px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  width: 90%;
  height: 45vh;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default AlbumDialogViewer;