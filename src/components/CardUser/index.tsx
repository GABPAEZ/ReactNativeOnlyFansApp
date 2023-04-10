/* eslint-disable prettier/prettier */
import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';
import {useLinkTo} from '@react-navigation/native';

interface user {
  id: string;
  coverImage: string;
  avatar: string;
  name: string;
  handle: string;
  bio: string;
  subscriptionPrice: number;
}

function CardUser(props: user) {
  const linkTo = useLinkTo();
  return (
    <Pressable onPress={() => linkTo(`/UserScreen/${props.id}`)}>
      <ImageBackground
        source={{uri: props.coverImage}}
        style={styles.sectionContainer}>
        <View style={styles.overlay} />
        <Image source={{uri: props.avatar}} style={styles.avatar} />
        <View style={styles.userDetails}>
          <Text style={styles.userDetailsText}>{props.name}</Text>
          <Text style={styles.userDetailTextArroba}>@{props.handle}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    ...StyleSheet.absoluteFillObject,
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
  },
  sectionContainer: {
    marginTop: 5,
    margin: 5,
    padding: 5,
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderRadius: 7,
    overflow: 'hidden',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'white',
  },
  userDetails: {
    marginLeft: 10,
  },
  userDetailsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  userDetailTextArroba: {
    color: 'white',
    fontSize: 14,
  },
  coverImage: {
    borderRadius: 5,
  },
});

export default CardUser;
