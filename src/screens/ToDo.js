/* eslint-disable prettier/prettier */
import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, FlatList, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';
import SunIcon from '../assets/SunIcon';
import StarIcon from '../assets/StarIcon';
import CalendarIcon from '../assets/CalendarIcon';
import UserIcon from '../assets/UserIcon';
import FlagIcon from '../assets/FlagIcon';
import TextView from '../assets/TextView';
import styles from './styles';

function ToDo({ route }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItem2, setSelectedItem2] = useState(null);
  const { email } = route.params;
  const [search, setSearch] = useState('');
  const [data, setData] = useState([
    { id: 1, svg: <SunIcon />, name: 'My Day' },
    { id: 2, svg: <StarIcon />, name: 'Important' },
    { id: 3, svg: <CalendarIcon />, name: 'Planned' },
    { id: 4, svg: <UserIcon />, name: 'Assigned to me' },
    { id: 5, svg: <FlagIcon />, name: 'Flagged email' },
  ]);
  const [text, setText] = useState('');
  const [textViews, setTextViews] = useState([]);

  const createNewTextView = (index) => {
    if (text.trim() !== '') {
      setTextViews([...textViews, text]);
      setText('');
      setSelectedItem(index);
    }
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.todoContainer}>
      <View style={styles.todoLeft}>
        <View style={styles.userContainer}>
          {/* ... (user info section) */}
        </View>
        <View style={styles.search}>
          {/* ... (search bar) */}
        </View>
        <View>
          <FlatList
            data={filteredData}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => createNewTextView(item.id)} style={styles.rowView}>
                <Text>
                  {item.svg}
                </Text>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View>
          <TouchableOpacity onPress={() => setSelectedItem2("Today")}>
            <Text>Today</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedItem2("Yesterday")}>
            <Text>Yesterday</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedItem2("Hello")}>
            <Text>Hello</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView>
            {textViews.map((textViewText, index) => (
              <TextView key={index} text={textViewText} />
            ))}
          </ScrollView>
          <View>
            <TextInput
              value={text}
              onChangeText={(newText) => setText(newText)}
            />
            <Button title="New List" onPress={() => createNewTextView(selectedItem)} />
          </View>
        </View>
      </View>

      <View style={styles.todoRight}>
        <View>
          <TouchableOpacity>
            <Text>{selectedItem2}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ToDo;
