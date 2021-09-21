import { useEffect, useState } from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

const Counter = () => {
  const [state, setstate] = useState(0)
  const increaseHandler = () => setstate(state + 1)
  const decreaseHandler = () => setstate(state - 1)
  return (
    <div>
      <h3>Count: {state}</h3>
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={decreaseHandler}>Decrease</button>
    </div>
  )
}

const ExternalUsers = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h1>USERS</h1>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

const User = (props) => {
  const style = {
    backgroundColor: '#d3d6db',
    margin: '10px',
    padding: '10px'
  }
  return (
    <div style={style}>
      <h2>Name: {props.name}</h2>
      <h3>email: {props.email}</h3>
    </div>
  )
}

export default App;
