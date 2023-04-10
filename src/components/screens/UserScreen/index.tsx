/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import users from '../../../../assets/data/users';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

const UserScreen = ({navigation}) => {
  const [isSubscribed, setSubscribed] = useState(false);
  const route = useRoute();
  const id = route.params?.screen;

  const user = users.find(u => u.id === id);

  if (!user) {
    return <Text>User not found!</Text>;
  }

  return (
    <View>
      <ImageBackground source={{uri: user.coverImage}} style={styles.cover}>
        <View style={styles.overlay} />
        <Icon
          name="arrow-back"
          size={24}
          color="#fff"
          onPress={navigation.goBack}
          style={styles.iconArrow}
        />
        <View>
          <Text style={styles.textName}>{user.name}</Text>
          <Text style={styles.textInfo}>14k Posts · 64.3 Likes · 153 fans</Text>
        </View>
      </ImageBackground>
      <View style={styles.headerContainer}>
        <View style={styles.logoHeader}>
          <Image source={{uri: user.avatar}} style={styles.avatar} />
          <Icon2 name="share-square-o" size={24} color="royalblue" />
        </View>
        <Text>Profile User: {id}</Text>
        <Text style={styles.profileText}>{user.name}</Text>
        <Text style={styles.handleText}>@{user.handle}</Text>
        <Text style={styles.bioText}>{user.bio}</Text>
        <Text style={styles.subscriptionText}>SUBSCRIPTION</Text>
        <Pressable
          onPress={() => setSubscribed(!isSubscribed)}
          style={[
            styles.buttonGroup,
            {backgroundColor: isSubscribed ? 'white' : 'royalblue'},
          ]}>
          <Text
            style={[
              styles.buttonText,
              {color: isSubscribed ? 'royalblue' : 'white'},
            ]}>
            {isSubscribed ? 'SUBSCRIBED' : 'SUBSCRIBE'}
          </Text>
          <Text
            style={[
              styles.buttonText,
              {color: isSubscribed ? 'royalblue' : 'white'},
            ]}>
            {user.subscriptionPrice === 0
              ? 'FOR FREE'
              : `$${user.subscriptionPrice} / month`}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
  },
  cover: {
    height: 200,
    width: '100%',
    flexDirection: 'row',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    ...StyleSheet.absoluteFillObject,
  },
  textName: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 24,
    marginBottom: 5,
  },
  textInfo: {
    color: '#fff',
  },
  iconArrow: {
    marginRight: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'white',
  },
  logoHeader: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: -60,
  },
  profileText: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 5,
  },
  handleText: {
    color: 'gray',
    marginBottom: 10,
  },
  bioText: {
    lineHeight: 20,
  },
  subscriptionText: {
    color: 'gray',
    marginTop: 20,
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'royalblue',
    fontweight: '600',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'gainsboro',
    padding: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginVertical: 10,
  },
});

export default UserScreen;
