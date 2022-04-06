import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import './styles.css';
import { Activity } from '../models/activity';

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log(response.data);
      setActivities(response.data);
    })
  }, [])


  return (
    <div className="App">

      <NavBar />

      <header className="App-header">
        <ul>
          {activities.map(activity => (
            <li key={activity.id}>
              {activity.title}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
