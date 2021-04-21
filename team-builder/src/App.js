import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Form from './Components/Form'
import Member from './Components/Member'

const memberList = [
  {
    name: 'Alex',
    email: 'whateveremail@gmail.com',
    role: 'Front-end'
  },
  {
    name: 'Edward',
    email: 'whateveremail@gmail.com',
    role: 'Full Stack'
  },
  {
    name: 'Robert',
    email: 'whateveremail@gmail.com',
    role: 'Back-end'
  }
]

const defaultMember = {
  name: '',
  email: '',
  role: ''
}

function App() {

  const [member, setMember] = useState(memberList)
  const [list, setList] = useState(defaultMember)
  const updateForm = (inputName, inputValue) => {
    setList({
      ...list,
      [inputName]: inputValue,
    })
  }
  const submitForm =() => {
    const newMember = {
      name: list.name.trim(),
      email: list.email.trim(),
      role: list.role
    }
    if (!newMember.name || !newMember.email || !newMember.role) {
      return;
    }
    setMember([newMember, ...member])
    setList(defaultMember)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Team Members
        </p>
        <div className='container'>
        <Form
        list={list}
        update={updateForm}
        submit={submitForm}
        />
      </div>
      </header>
      {member.map((member) => {
        return <Member key={member.id} info={member} />
      })}
    </div>
    
  );
}

export default App;
