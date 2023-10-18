import React from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../Colors'
import TodoModal from './TodoModal'

export default class TodoList extends React.Component{

    state = {
        showListVisible : false
    }

    toggleListModal(){
        this.setState({showListVisible : !this.state.showListVisible})
    }


    render(){
        const lists = this.props.lists
        const completedCount = lists.todos.filter(todo => todo.completed).length
        const remainingCount = lists.todos.filter(todo=> !todo.completed).length

        return (
            <View>
                <Modal animationType='slide' visible={this.state.showListVisible} onRequestClose={()=>this.toggleListModal()}>
                    <TodoModal lists={lists} closeModal={()=>this.toggleListModal()} updateList={this.props.updateList}></TodoModal>
                </Modal>
                <TouchableOpacity style={[styles.listContainer, {backgroundColor : lists.color}]} onPress={()=>this.toggleListModal()}>
                <Text style={styles.listTitle} numberOfLines={1}>
                    {lists.name}
                </Text>
                <View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.count}>{completedCount}</Text>
                        <Text style={styles.subtitle}>Completed</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.count}>{remainingCount}</Text>
                        <Text style={styles.subtitle}>Remaining</Text>
                    </View>
                </View>
            </TouchableOpacity>
            </View>
          )
    }
} 
    
const styles = StyleSheet.create({
    listContainer : {
        paddingVertical : 32,
        paddingHorizontal : 16,
        marginHorizontal : 12,
        borderRadius : 6,
        width : 200,
        alignItems: 'center'
    },
    listTitle:{
        fontSize: 24,
        fontWeight: "800",
        color: colors.white,
        textAlign: 'center',
    },
    count:{
        fontSize: 40,
        fontWeight: "200",
        color: colors.white,
    },
    subtitle:{
        fontSize: 16,
        fontWeight: "700",
        color: colors.white,
    }
})