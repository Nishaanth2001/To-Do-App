import React from 'react';
import TodoForm from './src/todoForm';
import TaskList from './src/todoList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { color } from 'react-native-reanimated';

function SettingsScreen({ navigation }) {
  return (
    <TaskList/>
  );
}
function HomeScreen({ navigation }) {
  return (
    <TodoForm/>
  );
}
function InfoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "blue" }}>
      <Text>App Developer: Nishaanth Goggle{"\n"}{"\n"}
      About: This is a simple and basic To-Do app for saving ur task or bucket list in one place.{"\n"}{"\n"} 
      Features: As of now this app allow user to add and delete tasks, Further development and additional features will be available in an update.{"\n"}{"\n"}
      Credits: AndroidClub VITCC Team, Nishaanth Goggle, Cheetah Coding.{"\n"}{"\n"}
      Happy Tasking!!!
      </Text>
    </View>
  );
}
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#00008b",
      },
      headerTintColor: "white",
      }
    }>
      <HomeStack.Screen name="Goggle" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#00008b",
      },
      headerTintColor: "white",
      }
    }>
      <SettingsStack.Screen name="Tasks" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

const InfoStack = createStackNavigator();

function InfoStackScreen() {
  return (
    <InfoStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#00008b",
      },
      headerTintColor: "white",
      }
    }>
      <InfoStack.Screen name="Info" component={InfoScreen} />
    </InfoStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "blue"
        }}>
      <Tab.Screen name="Home" component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
          <ion-icon name="home-outline"></ion-icon> />
          ),
        }}
         />
        <Tab.Screen name="Tasks" component={SettingsStackScreen}
        options={{
          tabBarLabel: "Tasks",
          tabBarIcon: ({ color, size }) => (
          <Ionicons name="rocket" color={color} size= {20} />
          ),
        }}
      />
        <Tab.Screen name="Info" component={InfoStackScreen}
        options={{
          tabBarLabel: "Info",
          tabBarIcon: ({ color, size }) => (
          <Ionicons name="information-circle" color={color} size= {20} />
          ),
        }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
}