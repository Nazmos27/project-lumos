import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity, FlatList, KeyboardAvoidingView, TextInput, Platform, Keyboard } from 'react-native'
import React, { Component } from 'react'
import {AntDesign ,Ionicons} from '@expo/vector-icons'
import colors from '../../Colors'


export default class TodoModal extends React.Component {

    state={
        // name: this.props.lists.name,
        // color: this.props.lists.color,
        // todos : this.props.lists.todos
        newTodo: ""
    }

    toggleTodoCompleted = index => {
        let lists = this.props.lists
        lists.todos[index].completed = !lists.todos[index].completed
        this.props.updateList(lists)
    }

    addTodo = () => {
        let lists = this.props.lists
        lists.todos.push({title: this.state.newTodo, completed: false})
        
        this.props.updateList(lists)
        this.setState({newTodo:""})

        Keyboard.dismiss()
    }

    renderTodo = (todo,index) => {
        return (
            <View style={styles.todoContainer}>
                <TouchableOpacity onPress={()=> this.toggleTodoCompleted(index)}>
                    <Ionicons 
                    name={todo.completed? "ios-square" : "ios-square-outline"}
                    size={24} color={colors.gray} 
                    style={{width:32}}/>
                </TouchableOpacity>
                <Text style={[styles.todo, 
                    {
                        textDecorationLine : todo.completed? 'line-through' : 'none',
                        color: todo.completed? colors.gray : colors.black
                    }]}>
                    {todo.title}
                </Text>
            </View>
        )
    }

  render() {

    const lists = this.props.lists
    const taskCount = lists.todos.length
    const completedCount = lists.todos.filter(todo=> todo.completed).length

    return (
        <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios' ? 'position' : ""}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={{position:'absolute', top: 32, right: 20, zIndex: 10}} onPress={this.props.closeModal}>
            <AntDesign name='close' size={28} color={colors.black}/>
        </TouchableOpacity>

        <View style={[styles.section, styles.header, {borderBottomColor: lists.color}]}>
            <View>
                <Text style={styles.title}>{lists.name}</Text>
                <Text style={styles.taskCount}>{completedCount} of {taskCount} Tasks</Text>
            </View>
        </View>

        <View style={[styles.section, {flex:3}]}>
            <FlatList 
            data={lists.todos} 
            renderItem={({item, index}) => this.renderTodo(item,index)} 
            keyExtractor={item => item.title}
            contentContainerStyle={{paddingHorizontal: 32, paddingVertical: 64}}
            showsHorizontalScrollIndicator={false}
            />
        </View>

        <View style={[styles.section,styles.footer]}>
            <TextInput style={[styles.input , {borderColor: lists.color}]} onChangeText={text => this.setState({newTodo : text})} value={this.state.newTodo}/>
            <TouchableOpacity style={[styles.addTodo, {backgroundColor: lists.color}]} onPress={()=>this.addTodo()}>
                <AntDesign name='plus' size={20} color={colors.white}/>
            </TouchableOpacity>
            
        </View>

      </SafeAreaView>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    section:{
        flex:1,
        alignSelf: 'stretch'
    },
    header:{
        justifyContent: 'flex-end',
        marginLeft : 64,
        borderBottomWidth : 3
    },
    title:{
        fontSize: 30,
        fontWeight: "800",
        color: colors.black
    },
    taskCount:{
        marginTop : 4,
        marginBottom: 16,
        color: colors.gray,
        fontWeight : "600"
    },
    input:{
        flex:1,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius:6,
        height:50,
        marginRight: 8,
        paddingHorizontal: 8
    },
    addTodo:{
        borderRadius: 4,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer:{
        paddingHorizontal: 32,
        alignItems: 'center',
        flexDirection:'row'
    },
    todoContainer:{
        paddingVertical : 16,
        alignItems: 'center',
        flexDirection: 'row'
    },
    todo:{
        color: colors.black,
        fontWeight:"700",
        fontSize: 16
    }
    
})