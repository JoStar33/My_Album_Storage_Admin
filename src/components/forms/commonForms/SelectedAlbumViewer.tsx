import React from 'react';
import SelectedAlbum from '../../albums/SelectedAlbum';
import { adminAlbumType } from '../../../types/adminAlbum';
import styled from 'styled-components';

type propsType = {
  selectedAlbums: adminAlbumType[],
  setSelectedAlbums: React.Dispatch<React.SetStateAction<adminAlbumType[]>>
}

const SelectedAlbumViewer: React.FC<propsType> = ({selectedAlbums, setSelectedAlbums}) => {
  return (
    <SelectedAlbumContainer>
      {
        selectedAlbums.map(album => 
          <SelectedAlbum 
            key={album.id}
            album={album}
            selectedAlbums={selectedAlbums}
            setSelectedAlbums={setSelectedAlbums}
          ></SelectedAlbum>)
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