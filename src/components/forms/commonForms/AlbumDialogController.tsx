import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from "react-query";
import { adminAlbumState } from '../../../states/atom';
import { useSetRecoilState } from 'recoil';
import { getSpotifyAlbum } from '../../../apis/albumApi'; 
import { adminAlbumType, item } from '../../../types/adminAlbum';

type propsType = {
  setSearchAlbums: React.Dispatch<React.SetStateAction<adminAlbumType[]>>
}

const AlbumDialogController: React.FC<propsType> = ({setSearchAlbums}) => {
  const [searchParam, setSearchParam] = useState({
    query: "",
    type: "album",
  });
  const makeSearchAlbum = (searchedData: item[]) => {
    const searchAlbums = [] as adminAlbumType[];
    searchedData.forEach((element) => {
      searchAlbums.push({
        id: element.id,
        artist: element.artists[0].name,
        image: element.images[0].url,
        description: "",
        header: '',
        owner: '',
        isSelected: false
      });
    });
    setSearchAlbums(searchAlbums);
  };  
  const { mutate, isLoading, isError, error, isSuccess } = useMutation(() => getSpotifyAlbum(searchParam.query, searchParam.type), {
    onSuccess: (data, variables, context) => {
      makeSearchAlbum(data.data.albums.items);
    },
    onError: (error, variables, context) => {
    },
    onSettled: (data, error, variables, context) => {
      // I will fire first
    },
  });
  const search = () => {
    mutate();
  };
  const handleChangeSearch = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSearchParam({
      ...searchParam,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      search(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };
  return (
    <DialogControllerContainer>
      <SearchInput
        placeholder="검색어를 입력해주세요."
        type="text"
        name="query"
        onKeyPress={handleOnKeyPress}
        onChange={handleChangeSearch}
      ></SearchInput>
      <SearchAlbumButton onClick={search}>앨범 검색</SearchAlbumButton>
    </DialogControllerContainer>
  );
};

const Centering = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  border-radius: 15px;
  width: 70%;
  height: 30px;
  margin-left: 3%;
  margin-right: 3%;
  outline: none;
`;

const DialogControllerContainer = styled.div`
width: 90%;
height: 10vh;
border-radius: 20px;
background-color: #E1D5FA;
display: flex;
justify-content: flex-end;
align-items: center;
`;

const SearchAlbumButton = styled(Centering)`
margin-right: 20px;
width: 200px;
height: 70%;
font-size: 20px;
font-weight: 800;
border-radius: 20px;
background-color: #CFE8FF;
user-select: none;
cursor: pointer;
`;

export default AlbumDialogController;