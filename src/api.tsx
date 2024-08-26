import axios from 'axios';
import {REACT_APP_NAVER_CLIENT_ID, REACT_APP_NAVER_CLIENT_SECRET} from '@env';

export const getNaverBook = async () => {
  const response = await axios.get(
    'https://openapi.naver.com/v1/search/book.json',
    {
      params: {query: '자기계발', display: 20, start: 1, sort: 'sim'},
      headers: {
        'X-Naver-Client-Id': REACT_APP_NAVER_CLIENT_ID,
        'X-Naver-Client-Secret': REACT_APP_NAVER_CLIENT_SECRET,
      },
    },
  );
  return response.data;
};

export const getNovel = async () => {
  const response = await axios.get(
    'https://openapi.naver.com/v1/search/book.json',
    {
      params: {query: '소설', display: 20, start: 1, sort: 'sim'},
      headers: {
        'X-Naver-Client-Id': REACT_APP_NAVER_CLIENT_ID,
        'X-Naver-Client-Secret': REACT_APP_NAVER_CLIENT_SECRET,
      },
    },
  );
  return response.data;
};
export const getEssay = async () => {
  const response = await axios.get(
    'https://openapi.naver.com/v1/search/book.json',
    {
      params: {query: '수필', display: 20, start: 1, sort: 'sim'},
      headers: {
        'X-Naver-Client-Id': REACT_APP_NAVER_CLIENT_ID,
        'X-Naver-Client-Secret': REACT_APP_NAVER_CLIENT_SECRET,
      },
    },
  );
  return response.data;
};
export const getHistory = async () => {
  const response = await axios.get(
    'https://openapi.naver.com/v1/search/book.json',
    {
      params: {query: '역사', display: 20, start: 1, sort: 'sim'},
      headers: {
        'X-Naver-Client-Id': REACT_APP_NAVER_CLIENT_ID,
        'X-Naver-Client-Secret': REACT_APP_NAVER_CLIENT_SECRET,
      },
    },
  );
  return response.data;
};
