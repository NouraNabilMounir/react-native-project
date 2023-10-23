/* eslint-disable prettier/prettier */
// AddTask.js

import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addTask } from './taskActions';

class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      newTaskText: '',
    };
  }

  handleTaskTextChange = (text) => {
    this.setState({ newTaskText: text });
  };

  handleAddTask = () => {
    const { newTaskText } = this.state;
    if (newTaskText.trim() !== '') {
      this.props.addTask({ text: newTaskText });
      this.setState({ newTaskText: '' });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Add a New Task</Text>
        <TextInput
          style={styles.input}
          value={this.state.newTaskText}
          onChangeText={this.handleTaskTextChange}
          placeholder="Task description"
        />
        <Button title="Add Task" onPress={this.handleAddTask} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingLeft: 10,
    marginBottom: 10,
  },
});

export default connect(null, { addTask })(AddTask);
