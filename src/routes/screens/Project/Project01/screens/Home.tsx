import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useQuery} from '@tanstack/react-query';
import {getNaverBook} from '../../../../../api';

const Home = () => {
  const {data} = useQuery({
    queryKey: ['naverBook'],
    queryFn: getNaverBook,
  });

  console.log(data);

  return (
    <View>
      <Text>Home</Text>
      <Icon name="close" size={30} color="#900" />
    </View>
  );
};

export default Home;
