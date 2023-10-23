/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import TaskItem from './TaskItem';

class TaskList extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.tasks} // Assuming this is your array of tasks
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskItem task={item} />
          )}
        />
      </View>
    );
  }
}

export default TaskList;

