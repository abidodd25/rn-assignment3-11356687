import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

// Custom Components
const Category = ({ title, image }) => (
  <View style={styles.categoryContainer}>
    <Image source={image} style={styles.categoryImage} />
    <Text style={styles.categoryTitle}>{title}</Text>
  </View>
);

const Task = ({ title }) => (
  <View style={styles.taskContainer}>
    <Text style={styles.taskTitle}>{title}</Text>
  </View>
);

const App = () => {
  const categories = [
    { title: 'Exercise', image: require('./assets/pushups.jpg') },
    { title: 'Study', image: require('./assets/research.webp') },
    { title: 'Code', image: require('./assets/code.webp') },
    { title: 'Cook', image: require('./assets/cook.webp') },
    { title: 'Read', image: require('./assets/workingwoman.png') },
    { title: 'Write', image: require('./assets/workingwoman.png') },
    { title: 'Play', image: require('./assets/plays.jpg') },
    { title: 'Meditate', image: require('./assets/medits.jpg') },
  ];

  const tasks = [
    { title: 'Mobile App Development' },
    { title: 'Web Development' },
    { title: 'Teach The Class' },
    { title: 'Learn React Native' },
    { title: 'Cook Dinner' },
    { title: 'Paint the class' },
    { title: 'Write a Book' },
    { title: 'Play Chess' },
    { title: 'Meditate for 30 mins' },
    { title: '100m Race' },
    { title: 'Study for Exams' },
    { title: 'Clean the House' },
    { title: 'Do an assignment' },
    { title: 'Work on Open Source' },
    { title: 'Plan Next Week' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Devs</Text>
          <Text style={styles.taskCount}>14 tasks today</Text>
        </View>
        <Image source={require('./assets/person.png')} style={styles.profileImage} />
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.search} placeholder="Search" />
        <Image source={require('./assets/search.png')} style={styles.searchIcon} />
        <TouchableOpacity>
          <Image source={require('./assets/filter.png')} style={styles.optionsIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.categoriesTitle}>Categories</Text>
      <View style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <Category key={index} title={category.title} image={category.image} />
        ))}
      </View>
      <Text style={styles.ongoingTaskTitle}>Ongoing Task</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Task title={item.title} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FAF9F6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  taskCount: {
    fontSize: 16,
    color: '#888',
    marginVertical: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  search: {
    flex: 1,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  optionsIcon: {
    width: 20,
    height: 20,
  },
  categoriesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryContainer: {
    width: '45%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ongoingTaskTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  taskContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    marginVertical: 5,
  },
  taskTitle: {
    fontSize: 16,
  },
});

export default App;