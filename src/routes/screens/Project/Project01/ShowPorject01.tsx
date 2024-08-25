import {View, Text, Image} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const Image01 = styled.View`
  position: absolute;
  top: 180px;
  right: 80px;
  z-index: 1;
`;
const Image01Img = styled.Image`
  width: 300px;
  height: 500px;
`;

const Image02 = styled.View`
  position: absolute;
  bottom: -55px;
  left: 10px;
  z-index: 2;
`;
const Image02Img = styled.Image`
  width: 250px;
  height: 500px;
`;

const Image03 = styled.View`
  position: absolute;
  top: -100px;
  left: 20px;
`;
const Image03Img = styled.Image`
  width: 180px;
  height: 500px;
`;

const Image04 = styled.View`
  position: absolute;
  top: -90px;
  right: 0;
`;
const Image04Img = styled.Image`
  width: 200px;
  height: 400px;
`;

const EnterBtn = styled.TouchableOpacity`
  position: absolute;
  bottom: 30px;
  right: 30px;
`;

const EnterText = styled.Text`
  font-size: 60px;
  font-weight: 100;
  text-shadow: 11px 11px 19px;
`;

type RootStackParamList = {
  ShowProject01: undefined;
  Project01: undefined;
  // 다른 스크린들을 여기에 추가하세요.
};

const ShowPorject01 = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'ShowProject01'>>();
  return (
    <View style={{position: 'relative', flex: 1}}>
      <Image01>
        <Image01Img
          source={require('../../../../../assets//project01/1.jpg')}
          resizeMode="contain"
        />
      </Image01>
      <Image02>
        <Image02Img
          source={require('../../../../../assets/project01/2.jpg')}
          resizeMode="contain"
        />
      </Image02>
      <Image03>
        <Image03Img
          source={require('../../../../../assets/project01/4.jpg')}
          resizeMode="contain"
        />
      </Image03>
      <Image04>
        <Image04Img
          source={require('../../../../../assets/project01/5.jpg')}
          resizeMode="center"
        />
      </Image04>
      <EnterBtn onPress={() => navigation.navigate('Project01')}>
        <EnterText>Enter</EnterText>
      </EnterBtn>
    </View>
  );
};

export default ShowPorject01;
