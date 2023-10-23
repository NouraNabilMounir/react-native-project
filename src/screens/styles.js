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
  containerFlexStyle: {
    flex:1,
  },
  todoContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  todoLeft: {
    flex: 1.3,
    backgroundColor: '#242936',
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
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  textContainer: {
    marginLeft: 8,
  },
  userName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  userEmail: {
    fontSize: 12,
    color: 'gray',
  },
  search: {
    flexDirection: 'row',
    backgroundColor: '#2F3443',
    alignItems: 'center',
  },
  typing:{
    color: 'white',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10 ,
  },
  iconStyle: {
    color: 'white',
  },
  textFlat: {
    color: 'white',
  },
  textFlat2: {
    color: 'white',
    paddingStart:10,
  },
  textFlatList: {
    marginEnd: 5,
  },
  buttonNew: {
    backgroundColor: '#232833',
    padding: 10,
    alignItems: 'flex-end',
  },
  textNew: {
    color: 'white',
    alignSelf: 'flex-start',
  },
  viewListStyle: {
    borderBottomColor: '#989AA8',
    borderBottomWidth: 0.3,
    width: '80%',
    marginStart:'8%',
  },
  rightHeading: {
    color: '#fff',
    fontWeight:'bold',
    textAlign: 'center',
    padding:10,
    fontSize: 20,
    textTransform: 'capitalize',
  },
  taskStyle:{
    backgroundColor: '#333233',
    color: '#fff',
    textAlign:'center',
    marginBottom: 10,
    padding:10,
  },
});

export default styles;
