import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  Animated,
} from 'react-native';
import styled from 'styled-components/native';

// Styled Components
const StartImage = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`;

const Header = styled.View`
  position: absolute;
  top: 20px;
  align-self: center;
`;

// Use Animated.Text instead of regular Text
const HeaderText = styled(Animated.Text)`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 2px;
`;

const Project01 = () => {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  const scrollY = useRef(new Animated.Value(0)).current;

  const color = scrollY.interpolate({
    inputRange: [800, 900],
    outputRange: ['white', 'black'],
    extrapolate: 'clamp',
  });

  const scale = scrollY.interpolate({
    inputRange: [0, windowHeight],
    outputRange: [1, 1.5],
    extrapolate: 'clamp',
  });

  return (
    <View style={{flex: 1}}>
      <StartImage style={{height: windowHeight}}>
        <Animated.Image
          source={require('../../../../assets/project01/pro1.jpg')}
          style={{
            height: windowHeight,
            width: windowWidth,
            transform: [{scale}],
          }}
          resizeMode="cover"
        />
      </StartImage>

      <ScrollView
        contentContainerStyle={{paddingTop: windowHeight}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}>
        <View style={{height: windowHeight, backgroundColor: 'white'}}>
          <Text style={{fontSize: 80}}>hello</Text>
        </View>
        {/* Additional content */}
        <View style={{height: windowHeight, backgroundColor: 'gray'}}>
          <Text style={{fontSize: 80}}>More Content</Text>
        </View>
        <View style={{height: windowHeight, backgroundColor: 'lightgray'}}>
          <Text style={{fontSize: 80}}>Keep Scrolling</Text>
        </View>
      </ScrollView>

      <Header>
        <HeaderText style={{color}}>CHANEL</HeaderText>
      </Header>
    </View>
  );
};

export default Project01;
