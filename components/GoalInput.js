import { useState } from "react";
import { View, TextInput, Button, Styleheet} from "react-native"

function GoalInput({onAddGoal}) {

    const [enteredGoalText, setEnteredGoalSet] = useState('')

    function handleInputGoal(enteredText) {
        // console.log(enteredText)
        setEnteredGoalSet(enteredText)
    }

    function addGoalHandler() {
        onAddGoal(enteredGoalText)
        setEnteredGoalSet('')
        console.log('addGoalHandler')
    }

    return (
        <View style = {styles.inputContainer}>
            <TextInput 
                style = {styles.textInput}
                placeholder = 'Your Goal!'
                onChangeText = {handleInputGoal}
                value = {enteredGoalText}
            />

            <Button 
                title = "Add Goal"
                color = {'#A3FFD6'}
                onPress = {addGoalHandler}
            /> 
        </View>
    )

}

export default GoalInput

const styles = Styleheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#7BC9FF'
    },

    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '80%',
        marginRight: 3,
        padding: 8, 
        borderRadius: 5
    },
})