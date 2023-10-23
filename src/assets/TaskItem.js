/* eslint-disable prettier/prettier */

// TaskItem.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskItem = ({ task }) => {
  return (
    <View style={styles.taskItem}>
      <Text>{task.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
});

export default TaskItem;
