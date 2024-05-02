import { StyleSheet, View, Text, Pressable } from "react-native"

function GoalItem({itemData, OnDeleteItem}){
    return(
        <Pressable>
            <View style={styles.goalsItem}>
                <Text style={style.goalText}>{itemData.item}</Text>
            </View>
        </Pressable>
    )
}

export default GoalItem

const styles = styleSheet.create({
    goalsItem:{
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#E97777',
        color: 'white'
    },
    goalText:{
        color: 'white'
    }
})