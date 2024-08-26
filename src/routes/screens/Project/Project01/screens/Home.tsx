import {View, Text} from 'react-native';
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {getEssay, getHistory, getNaverBook, getNovel} from '../../../../../api';
import {ScrollView} from 'react-native-gesture-handler';
import Vmedia from '../components/Hmedia';
import Loader from '../components/Loader';

interface BookData {
  title: string;
  isbn: string;
  image: string;
  author: string;
}

interface Book {
  items: BookData[];
}

const Home = () => {
  const {isLoading: selfDevelopLoading, data: selfDevelop} = useQuery<Book>({
    queryKey: ['naverBook'],
    queryFn: getNaverBook,
  });
  const {isLoading: NovelLoading, data: Novel} = useQuery<Book>({
    queryKey: ['novel'],
    queryFn: getNovel,
  });
  const {isLoading: EssayLoading, data: Essay} = useQuery<Book>({
    queryKey: ['eassay'],
    queryFn: getEssay,
  });
  const {isLoading: HistoryLoading, data: History} = useQuery<Book>({
    queryKey: ['history'],
    queryFn: getHistory,
  });

  const selfDevelopData = selfDevelop?.items || [];
  const NovelData = Novel?.items || [];
  const EssayData = Essay?.items || [];
  const HistoryData = History?.items || [];

  const isLoading =
    selfDevelopLoading || NovelLoading || EssayLoading || HistoryLoading;
  return (
    <ScrollView>
      {isLoading ? (
        <Loader />
      ) : (
        <View style={{paddingBottom: 40}}>
          <View style={{marginTop: 30}}>
            <Vmedia bookData={selfDevelopData} title="자기개발" />
          </View>
          <View style={{marginTop: 30}}>
            <Vmedia bookData={NovelData} title="소설" />
          </View>
          <View style={{marginTop: 30}}>
            <Vmedia bookData={EssayData} title="문학" />
          </View>
          <View style={{marginTop: 30}}>
            <Vmedia bookData={HistoryData} title="역사" />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default Home;
