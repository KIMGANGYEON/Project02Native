import {View, Text, Animated, Easing} from 'react-native';
import React, {useEffect, useRef} from 'react';
import styled from 'styled-components/native';

const ColorContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const GridItem = styled.View`
  height: 100%;
  width: 14.28%;
`;

const WelcomeTextBox = styled.View`
  position: absolute;
  font-size: 50px;
  color: black;
  top: 40%;
  flex-direction: row;
`;

const Btnbox = styled.View`
  position: absolute;
  top: 50%;
`;

const Nextbtn = styled.TouchableOpacity`
  padding: 5px 15px;
  background-color: skyblue;
`;

const NextbtnText = styled.Text`
  font-size: 25px;
  color: #eed48c;
  font-weight: bold;
`;

const WelcomeText = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: #eed48c;
`;

const AnimateText = Animated.createAnimatedComponent(WelcomeText);

const WelcomeScreen: React.FC = ({navigation}: any) => {
  const handlePress = () => {
    navigation.navigate('ShowProject');
  };

  const translateY = useRef(new Animated.Value(0)).current;
  const translateY2 = useRef(new Animated.Value(0)).current;
  const translateY3 = useRef(new Animated.Value(0)).current;
  const translateY4 = useRef(new Animated.Value(0)).current;
  const translateY5 = useRef(new Animated.Value(0)).current;
  const translateY6 = useRef(new Animated.Value(0)).current;
  const translateY7 = useRef(new Animated.Value(0)).current;
  const translateY8 = useRef(new Animated.Value(0)).current;
  const translateY9 = useRef(new Animated.Value(0)).current;
  const translateY10 = useRef(new Animated.Value(0)).current;
  const translateY11 = useRef(new Animated.Value(0)).current;
  const translateY12 = useRef(new Animated.Value(0)).current;
  const translateY13 = useRef(new Animated.Value(0)).current;
  const translateY14 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const moveUp = Animated.timing(translateY, {
      toValue: -20,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });
    const moveDown = Animated.timing(translateY, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    const moveUp2 = Animated.timing(translateY2, {
      toValue: -20,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });
    const moveDown2 = Animated.timing(translateY2, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    const moveUp3 = Animated.timing(translateY3, {
      toValue: -20,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });
    const moveDown3 = Animated.timing(translateY3, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    const moveUp4 = Animated.timing(translateY4, {
      toValue: -20,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });
    const moveDown4 = Animated.timing(translateY4, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    const moveUp5 = Animated.timing(translateY5, {
      toValue: -20,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });
    const moveDown5 = Animated.timing(translateY5, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    const moveUp6 = Animated.timing(translateY6, {
      toValue: -20,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });
    const moveDown6 = Animated.timing(translateY6, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    const moveUp7 = Animated.timing(translateY7, {
      toValue: -20,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });
    const moveDown7 = Animated.timing(translateY7, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    const moveUp8 = Animated.timing(translateY8, {
      toValue: -20,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });
    const moveDown8 = Animated.timing(translateY8, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    const moveUp9 = Animated.timing(translateY9, {
      toValue: -20,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });
    const moveDown9 = Animated.timing(translateY9, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    const moveUp10 = Animated.timing(translateY10, {
      toValue: -20,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });
    const moveDown10 = Animated.timing(translateY10, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    const moveUp11 = Animated.timing(translateY11, {
      toValue: -20,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });
    const moveDown11 = Animated.timing(translateY11, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    const moveUp12 = Animated.timing(translateY12, {
      toValue: -20,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });
    const moveDown12 = Animated.timing(translateY12, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    const moveUp13 = Animated.timing(translateY13, {
      toValue: -20,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });
    const moveDown13 = Animated.timing(translateY13, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    const moveUp14 = Animated.timing(translateY14, {
      toValue: -20,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });
    const moveDown14 = Animated.timing(translateY14, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    Animated.loop(Animated.sequence([moveUp, moveDown])).start();

    setTimeout(() => {
      Animated.loop(Animated.sequence([moveUp2, moveDown2])).start();
    }, 300);

    setTimeout(() => {
      Animated.loop(Animated.sequence([moveUp3, moveDown3])).start();
    }, 500);

    setTimeout(() => {
      Animated.loop(Animated.sequence([moveUp4, moveDown4])).start();
    }, 700);

    setTimeout(() => {
      Animated.loop(Animated.sequence([moveUp5, moveDown5])).start();
    }, 900);

    setTimeout(() => {
      Animated.loop(Animated.sequence([moveUp6, moveDown6])).start();
    }, 1100);

    setTimeout(() => {
      Animated.loop(Animated.sequence([moveUp7, moveDown7])).start();
    }, 1300);

    setTimeout(() => {
      Animated.loop(Animated.sequence([moveUp8, moveDown8])).start();
    }, 1500);

    setTimeout(() => {
      Animated.loop(Animated.sequence([moveUp9, moveDown9])).start();
    }, 1700);

    setTimeout(() => {
      Animated.loop(Animated.sequence([moveUp10, moveDown10])).start();
    }, 1900);

    setTimeout(() => {
      Animated.loop(Animated.sequence([moveUp11, moveDown11])).start();
    }, 2100);

    setTimeout(() => {
      Animated.loop(Animated.sequence([moveUp12, moveDown12])).start();
    }, 2300);

    setTimeout(() => {
      Animated.loop(Animated.sequence([moveUp13, moveDown13])).start();
    }, 2500);

    setTimeout(() => {
      Animated.loop(Animated.sequence([moveUp14, moveDown14])).start();
    }, 2700);
  }, [translateY]);

  const colors = translateY.interpolate({
    inputRange: [-20, 0],
    outputRange: ['black', 'white'],
  });

  return (
    <ColorContainer>
      <GridItem style={{backgroundColor: 'red'}}></GridItem>
      <GridItem style={{backgroundColor: 'orange'}}></GridItem>
      <GridItem style={{backgroundColor: 'yellow'}}></GridItem>
      <GridItem style={{backgroundColor: 'green'}}></GridItem>
      <GridItem style={{backgroundColor: 'blue'}}></GridItem>
      <GridItem style={{backgroundColor: 'navy'}}></GridItem>
      <GridItem style={{backgroundColor: 'purple'}}></GridItem>
      <WelcomeTextBox>
        <AnimateText
          style={{
            transform: [{translateY: translateY}],
          }}>
          W
        </AnimateText>
        <AnimateText
          style={{
            transform: [{translateY: translateY2}],
          }}>
          E
        </AnimateText>
        <AnimateText
          style={{
            transform: [{translateY: translateY3}],
          }}>
          L
        </AnimateText>
        <AnimateText
          style={{
            transform: [{translateY: translateY4}],
          }}>
          C
        </AnimateText>
        <AnimateText
          style={{
            transform: [{translateY: translateY5}],
          }}>
          O
        </AnimateText>
        <AnimateText
          style={{
            transform: [{translateY: translateY6}],
          }}>
          M
        </AnimateText>
        <AnimateText
          style={{
            transform: [{translateY: translateY7}],
            marginRight: 15,
          }}>
          E
        </AnimateText>
        <AnimateText
          style={{
            transform: [{translateY: translateY8}],
          }}>
          N
        </AnimateText>
        <AnimateText
          style={{
            transform: [{translateY: translateY9}],
          }}>
          E
        </AnimateText>
        <AnimateText
          style={{
            transform: [{translateY: translateY10}],
            marginRight: 15,
          }}>
          W
        </AnimateText>
        <AnimateText
          style={{
            transform: [{translateY: translateY11}],
          }}>
          W
        </AnimateText>
        <AnimateText
          style={{
            transform: [{translateY: translateY12}],
          }}>
          O
        </AnimateText>
        <AnimateText
          style={{
            transform: [{translateY: translateY13}],
          }}>
          R
        </AnimateText>
        <AnimateText
          style={{
            transform: [{translateY: translateY14}],
          }}>
          D
        </AnimateText>
      </WelcomeTextBox>
      <Btnbox>
        <Nextbtn>
          <NextbtnText onPress={handlePress}>ENTER</NextbtnText>
        </Nextbtn>
      </Btnbox>
    </ColorContainer>
  );
};

export default WelcomeScreen;
