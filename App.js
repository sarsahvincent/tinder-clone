import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from './src/components/Tindercard/index';
import users from './assets/data/users'

const vincent = {
  name: 'Vincent Sarsah',
  bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut quam accusantium itaque aspernatur eum facilis asperiores magni aliquid. Iure itaque',
  image:
    'https://res.cloudinary.com/vincentsarsah/image/upload/v1653566916/my_pics/ajwsgkcufe9cmz9w2ri3.jpg',
};

const App = () => {
  return (
    <View style={styles.pagContainer}>
      <Card user={users[3]} />
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
});
