/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize:50,
    marginBottom: 10,
    marginTop: 20,
  },
  rowContainer:{
    width:'80%',
  },
  inputView:{
    width:'100%',
    backgroundColor:'#fff',
    borderRadius:3,
    height:50,
    marginBottom:15,
    justifyContent:'center',
    padding:20,
    borderColor: 'gray',
    borderWidth: 1,
  },
  labelText: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  inputText:{
  height:50,
  },
  invalidInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 10,
    height: 10,
    backgroundColor: '#285F7F',
    borderRadius: 3,
  },
  loginBtn:{
    width:'80%',
    backgroundColor:'#285F7F',
    borderRadius:3,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    marginBottom:30,
    },
  textBtn:{
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize:20,
    color:'#fff',
  },
  textRead: {
    fontWeight: 'bold',
  },
  todoContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  todoLeft: {
    flex: 1.3,
    backgroundColor: '#24252A',
  },
  todoRight: {
    flex: 2,
    backgroundColor: '#1F1E1F',
    textAlign: 'center',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userAvatar: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  textContainer: {
    marginLeft: 16,
  },
  userName: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 12,
    color: 'gray',
  },
  search: {
    flexDirection: 'row',
    backgroundColor: 'gray',
    alignItems: 'center',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10 ,
  },
  todoRightText:{
    fontWeight:'bold',
    color:'#fff',
    // fontSize:'16',
  },
});

export default styles;
