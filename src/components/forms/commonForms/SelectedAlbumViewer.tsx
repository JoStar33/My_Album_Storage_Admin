import React from 'react';
import SelectedAlbum from '../../albums/SelectedAlbum';
import { adminAlbumType } from '../../../types/adminAlbum';
import styled from 'styled-components';

type propsType = {
  searchAlbums: adminAlbumType[],
  setSearchAlbums: React.Dispatch<React.SetStateAction<adminAlbumType[]>>
}

const SelectedAlbumViewer: React.FC<propsType> = ({searchAlbums, setSearchAlbums}) => {
  return (
    <SelectedAlbumContainer>
      {
        searchAlbums.map(album => 
          album.isSelected 
          ? <SelectedAlbum 
              key={album.id}
              album={album}
              setSearchAlbums={setSearchAlbums}
            ></SelectedAlbum> 
          : <></>)
      }
    </SelectedAlbumContainer>
  );
};

const SelectedAlbumContainer = styled.div`
  margin-top: 40px;
  width: 90%;
  height: 25vh;
  background-color: #E1D5FA;
  border-radius: 20px;
  margin-bottom: 8px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default SelectedAlbumViewer;