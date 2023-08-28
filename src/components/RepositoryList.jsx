import React from 'react';
import {FlatList} from 'react-native';
import repositories from '../data/repositories';
import RepositoryItems from './RepositoryItems';

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      renderItem={({item: repo}) => <RepositoryItems {...repo} />}
    />
  );
};

export default RepositoryList;
