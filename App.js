import { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([])


  function handleAddGoal(enteredGoalText) {
    // console.log(enteredGoalText)
    // console.log('Hello You')
    setGoals(() => [...goals, {text: enteredGoalText, key: Math.random().toString()}])
    console.log(goals)
  }

  function handleDeleteGoal(){
    console.log('DELETE')
  }

  
  return (
    <View style={styles.container}>
      {/* <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Your Goal!'
          onChangeText={handleInputGoal}
        />
        <Button 
          title="Add Goal" 
          color={'#A3FFD6'}
          onPress={handleAddGoal}
        />
      </View> */}
      <GoalInput
        onAddGoal={handleAddGoal}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={ (itemData) => {
            return(
              // <View style={styles.goalsItem} >
              //   <Text style={styles.goalText}>{itemData.item.text}</Text>
              // </View>
              <GoalItem 
                itemData={itemData}
                onDeleteItem={handleDeleteGoal} 
              />
            )
          }}
          keyExtractor={(item) => {
            return item.id
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#7BC9FF'
  },
  btnGoal:{
    borderRadius: 20,
    backgroundColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 3,
    padding: 8,
    borderRadius: 5
  },
  goalsContainer: {
    flex: 5
  },
});