// App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

import Skeleton from './src/Skeleton';

export default function App() {
  return (
    <View style={styles.header}>
      <Skeleton
        width={60}
        height={60}
        borderRadius={30}
        style={styles.profileImage}
      />

      <View style={styles.headerText}>
        <Skeleton width="70%" height={20} style={{ marginBottom: 5 }} />
        <Skeleton width="40%" height={20} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
  profileImage: {
    marginRight: 15,
  },
  headerText: {
    flex: 1,
  },
});
