import { useState } from "react";
import { StyleSheet, TextInput, Button, View, Modal, Image } from "react-native";
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  //Goal Input Handler
  function goalInputHandler(entertedText) {
    setEnteredGoalText(entertedText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  function cancelHandler() {}
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image}/>
        <TextInput
          style={styles.textInput}
          placeholder="Please Enter Your Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goals" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#ddd"
  },
  textInput: {
    borderWidth: 1,
    borderBlockColor: "#cccccc",
    padding: 10,
    width: "84%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button:{
    width:'40%',
    marginTop:16,
    marginHorizontal:8,
  },
  image:{
    width:50,
    height:50,
    margin:20
  }
});
