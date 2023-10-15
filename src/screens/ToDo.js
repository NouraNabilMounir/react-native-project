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
          <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat1.png' }} style={styles.userAvatar} />
          <View style={styles.textContainer}>
            <Text style={styles.userName}>Mohamed Lotfy</Text>
            <Text style={styles.userEmail}>{email ? email : "m.lotfy@taqneen.com"}</Text>
          </View>
        </View>
        <View style={styles.search} >
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            <Circle cx="25" cy="25" r="10" fill="white" />
            <Line x1="30" y1="30" x2="40" y2="40" stroke="white" stroke-width="3" />
          </Svg>
          <TextInput
            placeholder="Search..."
            onChangeText={text => setSearch(text)}
            value={search}
          />
        </View>
        <View>
          <FlatList
            data={filteredData}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.rowView}>
                <Text>
                  {item.svg}
                </Text>
                <Text>{item.name}</Text>
              </View>
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
