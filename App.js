import {PanGestureHandler} from 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import Card from './src/components/Tindercard/index';
import users from './assets/data/users';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';

const App = () => {
  const translateX = useSharedValue(0);

  const cardStyle = useAnimatedStyle(() => ({
    // opacity: sharedValue.value,
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: _ => {
      console.log('onStart');
    },
    onActive: event => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      console.log('onEnd');
    },
  });
  return (
    <View style={styles.pagContainer}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.animatedCard, cardStyle]}>
          <Card user={users[0]} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  pagContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  animatedCard: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
