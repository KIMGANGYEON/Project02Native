import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.ScrollView``;

const ImageStart = styled.View`
  position: relative;
  flex: 1;
  background-color: red;
`;

const Header = styled.View`
  position: absolute;
  z-index: 1;
  top: 25px;
  width: 100%;
`;

const HeaderText = styled.Text`
  font-weight: bold;
  color: white;
  font-size: 30px;
  text-align: center;
  letter-spacing: 3px;
`;

const Project01 = () => {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <>
      <Container>
        <ImageStart>
          <Image
            source={require('../../../../assets/project01/pro1.jpg')}
            resizeMode="cover"
            style={{height: windowHeight}}
          />
        </ImageStart>
        <View style={{height: windowHeight}}>
          <Text>hello</Text>
        </View>
      </Container>
      <Header>
        <HeaderText>CHANEL</HeaderText>
      </Header>
    </>
  );
};

export default Project01;
