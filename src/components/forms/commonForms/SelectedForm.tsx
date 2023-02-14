import React from 'react';
import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';

const SelectedForm: React.FC = () => {
  return (
    <SelectedFormContainer>
      <CheckIcon></CheckIcon>
    </SelectedFormContainer>
  );
};

const Centering = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectedFormContainer = styled(Centering)`
  background-color: rgba(201, 240, 213, 0.4);
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default SelectedForm;