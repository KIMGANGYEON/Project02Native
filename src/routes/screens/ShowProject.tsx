import {
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import ShowPorject01 from './Project/Project01/ShowPorject01';

const ScrollViews = styled.ScrollView`
  flex: 1;
`;

const FirstView = styled.View`
  flex: 1;
  background-color: rebeccapurple;
`;

const SlideView = styled.View`
  background-color: white;
  flex: 1;
`;

const SlideBox = styled.ScrollView`
  flex: 1;
`;

const ShowProject = () => {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  return (
    <ScrollViews>
      <FirstView style={{height: windowHeight, width: windowWidth}}>
        <View style={{flex: 1}}></View>
        <Text>ShowProject</Text>
      </FirstView>
      <SlideView style={{height: windowHeight}}>
        <SlideBox horizontal={true}>
          <View style={{width: windowWidth}}>
            <ShowPorject01 />
          </View>
          <View style={{width: windowWidth}}>
            <Text>2</Text>
          </View>
          <View style={{width: windowWidth}}>
            <Text>3</Text>
          </View>
        </SlideBox>
      </SlideView>
    </ScrollViews>
  );
};

export default ShowProject;
