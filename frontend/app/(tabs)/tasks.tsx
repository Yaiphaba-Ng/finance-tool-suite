import React, { useState } from 'react';
import { StyleSheet, FlatList, TextInput, Pressable } from 'react-native';
import { Text, View, useThemeColor } from '@/components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from '@/components/useColorScheme';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export default function TasksScreen() {
  const colorScheme = useColorScheme();
  const theme = colorScheme ?? 'light';
  
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Learn React Native', completed: false },
    { id: '2', text: 'Master Expo SDK 54', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const inputBg = useThemeColor({ light: '#fff', dark: '#1c1c1e' }, 'background');
  const inputText = useThemeColor({}, 'text');
  const cardBg = useThemeColor({ light: '#fff', dark: '#1c1c1e' }, 'background');

  const addTask = () => {
    if (newTask.trim().length === 0) return;
    setTasks([
      ...tasks,
      { id: Date.now().toString(), text: newTask, completed: false },
    ]);
    setNewTask('');
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { backgroundColor: inputBg, color: inputText, borderColor: theme === 'light' ? '#ccc' : '#333' }]}
          placeholder="Add a new task..."
          placeholderTextColor="#888"
          value={newTask}
          onChangeText={setNewTask}
        />
        <Pressable style={styles.addButton} onPress={addTask}>
          <FontAwesome name="plus" size={24} color="white" />
        </Pressable>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.taskItem, { backgroundColor: cardBg }]}>
            <Pressable
              style={styles.taskTextContainer}
              onPress={() => toggleTask(item.id)}
            >
              <FontAwesome
                name={item.completed ? 'check-circle' : 'circle-o'}
                size={24}
                color={item.completed ? '#4CAF50' : '#888'}
              />
              <Text
                style={[
                  styles.taskText,
                  item.completed && styles.completedText,
                ]}
              >
                {item.text}
              </Text>
            </Pressable>
            <Pressable onPress={() => deleteTask(item.id)}>
              <FontAwesome name="trash" size={24} color="#FF5252" />
            </Pressable>
          </View>
        )}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#2196F3',
    width: 50,
    height: 50,
    borderRadius: 8,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  taskTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  taskText: {
    fontSize: 16,
    marginLeft: 15,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});
