import React from 'react';
import styled from 'styled-components';

const AlbumViewerForm: React.FC = () => {
  return (
    <div>
      
    </div>
  );
};

const AlbumViewer = styled.div`
  border: 3px solid black;
  border-radius: 20px;
  margin-top: 8px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  width: 90%;
  height: 60%;
  ::-webkit-scrollbar {
    display: none;
  }
`;


export default AlbumViewerForm;