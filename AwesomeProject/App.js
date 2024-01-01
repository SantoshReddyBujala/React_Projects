import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [isModleVisible, setIsModelVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setIsModelVisible(true);
  }

  //Goal Button Handler
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalModelHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== id)
    );
  }

  function endAddGoalModelHandler() {
    setIsModelVisible(false);
  }
  return (
    <>
    <StatusBar style="auto" />
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0463"
        onPress={startAddGoalHandler}
      />
      <GoalInput visible={isModleVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalModelHandler}/>
      <View style={styles.goalsContainer}>
        {/* <ScrollView>
          <Text style={styles.textAlignment}>Your goals list...</Text>
          {courseGoals.map((goal) => (
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    marginHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 6,
  },
  textAlignment: {
    marginTop: 12,
  },
});
