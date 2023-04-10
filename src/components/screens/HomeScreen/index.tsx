/* eslint-disable prettier/prettier */
import {View, StatusBar, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import users from '../../../../assets/data/users.js';
import CardUser from '../../../components/CardUser';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <FlatList
        data={users}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CardUser
            id={item.id}
            coverImage={item.coverImage}
            avatar={item.avatar}
            name={item.name}
            handle={item.handle}
            bio={item.bio}
            subscriptionPrice={item.subscriptionPrice}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
