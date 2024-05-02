import { useState } from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"

function GoalInput({OnAddGoal}){
    const [enteredGoalText, setEnteredGoalText] = useState("")

    function handleInputGoal(enteredText){
        console.log(enteredText)
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler(){
        OnAddGoal(enteredGoalText)
        setEnteredGoalText("")
        console.log('addGoalHandler')
    }
    return (
        <View style = {styles.inputContainer}>
            <TextInput
                style = {styles.textInput}
                placeholder = "Your Goal!"
                onChangeText = {handleInputGoal}
                value = {enteredGoalText}
            />
            <Button
                title = "Add Goal"
                color = {'#b00b1e'}
                onPress ={addGoalHandler}
            />
        </View>

    )

}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        filexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#FF9F9F'
    },
    textInput:{
        borderWidth: 1,
        borderColor: '#cccccc',
        width: "80%",
        marginRight: 3,
        padding: 8,
        borderRadius: 5
    }
})