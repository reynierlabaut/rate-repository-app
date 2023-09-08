import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import StylesText from './StylesText';
import RepositoryStats from './RepositoryStats';
import theme from '../theme';
import {Platform} from 'react-native';

const RepositoryItemsHeader = ({name, phone, username, email}) => (
  <View style={{flexDirection: 'row', paddingBottom: 4}}>
    <View>
      <Image
        style={styles.image}
        source={{uri: 'https://via.placeholder.com/150/92c952'}}
      />
    </View>
    <View style={{flex: 1}}>
      <StylesText fontWeight="bold" color="secondary">
        {' '}
        Name: {name}{' '}
      </StylesText>
      <StylesText fontWeight="bold"> User Name: {username} </StylesText>
      <StylesText color="blue"> EMAIL: {email} </StylesText>
      <StylesText style={styles.stylePhone}>{phone}</StylesText>
    </View>
  </View>
);

const RepositoryItems = props => (
  <View key={props.id} style={styles.container}>
    <RepositoryItemsHeader {...props} />

    <RepositoryStats {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  stylePhone: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: Platform.OS === 'android' ? 'blue' : 'purple',
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden',
    marginVertical: 4,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
    borderColor: 'red',
    paddingTop: 10,
  },
});

export default RepositoryItems;

// for values to exeding 10000
// const parseThousands = value => {
//   return value >= 1000 ? `${Math.round(value/100)/10}k`: String(value)
// }
