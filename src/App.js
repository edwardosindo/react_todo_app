import React from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'

function App() {

//        const date = new Date()
//        const hours = date.getHours()
//        let timeOfDay
//        const styles = {
//        fontSize: 30
//        }
//
//        if (hours < 12) {
//            timeOfDay = "Morning"
//            styles.color = "#D90000"
//        } else if (hours >=12 && hours < 17) {
//            timeOfDay = "Afternoon"
//            styles.color = "1475GF"
//        } else {
//            timeOfDay = "Evening"
//            styles.color = "0A795F"
//        }
    return (
        <div className="todo-list">
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>

        </div>

//          <div>
//            <h1 style ={styles}> Good {timeOfDay}</h1>
//          </div>
    );
}

export default App;
