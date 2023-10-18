import { StatusBar } from 'expo-status-bar';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {AntDesign} from '@expo/vector-icons'
import colors from './Colors'
import tempData from './tempData';
import TodoList from './components/ToDoListsPart/TodoList';
import React from 'react';
import AddListModal from './components/ToDoListsPart/AddListModal';


export default class App extends React.Component{

  state={
    addTodoVisible : false,
    listData : tempData
  }

  toggleAddTodoModal(){
    this.setState({addTodoVisible : !this.state.addTodoVisible})
  }

  renderList = lists => {
    return <TodoList lists= {lists} updateList ={this.updateList}></TodoList>
  }

  addList = lists =>{
    this.setState({listData : [...this.state.listData,{...lists,id: this.state.listData.length+1,todos: []}]})
  }

  updateList = lists =>{
    this.setState({
      listData: this.state.listData.map(item =>{
        return item.id === lists.id ? lists : item
      })
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <Modal animationType='slide' visible={this.state.addTodoVisible} onRequestClose={()=>this.toggleAddTodoModal()}>
          <AddListModal closeModal = {() => this.toggleAddTodoModal()} addList={this.addList}></AddListModal>
        </Modal>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.divider}>
          </View>
            <Text style={styles.title}>
              Todo <Text style={{fontWeight:'300', color: colors.lightBlue}}>Lists</Text>
            </Text>
            <View style={styles.divider}>
          </View>
        </View>
        <View style={{marginVertical: 48}}>
          <TouchableOpacity style={styles.addList} onPress={() => this.toggleAddTodoModal()}>
            <AntDesign name="plus" size={20} color={colors.blue}/>
          </TouchableOpacity>
          <Text style={styles.add}>Add List</Text>
        </View>
        <View style={{height: 275, paddingLeft: 30}}>
          <FlatList 
            data={this.state.listData}
            keyExtractor={(item) => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=> this.renderList(item)}
          />
        </View>
      </View>
    )
  }
}

  




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider:{
    backgroundColor: colors.lightBlue,
    flex:1,
    alignSelf: 'center',
    height: 2,

  },
  title:{
    fontSize: 36,
    fontWeight: "800",
    paddingHorizontal:30,
    color: colors.black
  },
  addList:{
    borderWidth:2,
    borderColor: colors.blue,
    borderRadius: 2,
    padding: 20,
    alignItems:'center',
    justifyContent: 'center'
  },
  add:{
    marginTop: 5,
    fontSize: 17,
    color: colors.blue
  }
});
