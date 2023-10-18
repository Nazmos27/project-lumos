import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {AntDesign} from '@expo/vector-icons'
import colors from './Colors'
export default function App() {
  return (
    <View style={styles.container}>
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
        <TouchableOpacity style={styles.addList}>
          <AntDesign name="plus" size={20} color={colors.blue}/>
        </TouchableOpacity>
        <Text style={styles.add}>Add List</Text>
      </View>
    </View>
  );
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
