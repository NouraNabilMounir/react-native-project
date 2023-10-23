/* eslint-disable prettier/prettier */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import TextView from '../assets/TextView';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

function ToDo({ route }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItem2, setSelectedItem2] = useState(null);
  const { email } = route.params;
  const [search, setSearch] = useState('');
  const handleTextViewClick = (textView,index)=> {
    setSelectedItem2(textView);
  };
  const retrieveTextViews = async () => {
    try {
      const textViews = await AsyncStorage.getItem('textViews');
      if (textViews !== null) {
        const textViewsArray = JSON.parse(textViews);
        setTextViews(textViewsArray);
      }
    } catch (error) {
      console.error('Error retrieving text views:', error);
    }
  };
    useEffect(() => {
    retrieveTextViews();
  }, []);
  const [data, setData] = useState([
    { id: 1, icon: <Icon name="sunny" size={20} style={styles.iconStyle}/> , name: 'My Day'},
    { id: 2, icon: <Icon name="star" size={20} style={styles.iconStyle}/>, name: 'Important'},
    { id: 3, icon: <Icon name="calendar-today" size={20} style={styles.iconStyle}/>, name: 'Planned'},
    { id: 4, icon: <Icon name="person" size={20} style={styles.iconStyle}/>, name: 'Assigned to me'},
    { id: 5, icon: <Icon name="flag" size={20} style={styles.iconStyle}/>, name: 'Flagged email'},
    { id: 6, icon: <Icon name="home" size={20} style={styles.iconStyle}/>, name: 'Tasks'},
  ]);
  const [text, setText] = useState('');
  const [textViews, setTextViews] = useState([]);
  const createNewTextView = async (index) => {
    if (text.trim() !== '') {
      const existingTextViews = await AsyncStorage.getItem('textViews');
      const textViewsArray = existingTextViews ? JSON.parse(existingTextViews) : [];
      textViewsArray.push(text);
      await AsyncStorage.setItem('textViews', JSON.stringify(textViewsArray));
      setTextViews(textViewsArray);
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
          <Text><Icon name="search" size={20} style={styles.iconStyle}/></Text>
          <TextInput
            placeholder="Search"
            placeholderTextColor="white"
            onChangeText={text => setSearch(text)}
            value={search}
            style={styles.typing}
          />
        </View>
        <View>
          <FlatList
            data={filteredData}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.rowView}>
                <Text style={styles.textFlatList}>
                  {item.icon}
                </Text>
                <Text style={styles.textFlat}>{item.name}</Text>
              </View>
            )}
          />
        </View>
        <View style={styles.viewListStyle}></View>
        <View style={styles.containerFlexStyle}>
          <ScrollView>
          {textViews.map((textView, index) => (
        <TouchableOpacity style={styles.rowView} key={index} onPress={() => handleTextViewClick(textView, index)}>
          <Text><Icon name="list" size={20} style={styles.iconStyle}/></Text>
          <Text style={styles.textFlat2}>{textView}</Text>
        </TouchableOpacity>
        ))}
          </ScrollView>
          <View>
            <TextInput
              value={text}
              onChangeText={(newText) => setText(newText)}
              placeholder="Enter New List"
              placeholderTextColor="white"
              style={styles.typing}
            />
            <TouchableOpacity style={styles.buttonNew} onPress={() => createNewTextView(textViews.length)}>
              <Text style={styles.textNew}>+ &nbsp; New List</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.todoRight}>
        <View>
          <TouchableOpacity>
            <TextInput style={styles.rightHeading}>{selectedItem2}</TextInput>
          </TouchableOpacity>
          <Text style={styles.taskStyle}>1</Text>
          <Text style={styles.taskStyle}>2</Text>
          <Text style={styles.taskStyle}>3</Text>
        </View>
      </View>
    </View>
  );
}

export default ToDo;
