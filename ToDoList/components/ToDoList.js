import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { v4 as uuidv4 } from "uuid";
import AddTask from "./AddTask";

const ToDoList = ({ initialTasks }) => {
  const [toDos, setToDos] = useState(initialTasks);

  addToDo = (newTitle) => {
    setToDos((toDos) => [...toDos, { id: uuidv4(), task: newTitle }]);
  };

  removeToDo = (id) => {
    setToDos(toDos.filter((value) => value.id !== id));
  };

  return (
    <View style={styles.todoListContainer}>
      {toDos.map((value) => (
        <View style={styles.todoItem} key={value.id}>
          <Text>{value.task}</Text>
          <Button onPress={() => removeToDo(value.id)} title="Remove" />
        </View>
      ))}
      <AddTask onAddTask={addToDo} />
    </View>
  );
};

ToDoList.defaultProps = {
  initialTasks: [],
};

const styles = StyleSheet.create({
  todoListContainer: {
    margin: 10,
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default ToDoList;
