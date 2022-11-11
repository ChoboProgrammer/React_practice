import React from 'react';
import './css/App.css';
import Modal from './components/modal/Modal';
import Login from './components/modal/Login';
import DetailModal from './components/modal/DetailModal';
import Example from './3-10/Example';
import Watch from './closure/Watch';
import MomentExample from './components/moment/MomentExample';
import DayJsExample from './dayjs/DayJsExample';
function Dimmed(){
  return (
    <div className="dimmed">
    </div>
  )
}
function App() {
  const [LoginOpen,setLoginOpen] = React.useState(false)
  const [DetailOpen,setDetailOpen] = React.useState(false)

  const handleDetailModal = () =>{
    setDetailOpen((prev)=>!prev)
  }
  const handleLoginModal = () =>{
    setLoginOpen((prev)=>!prev)
  }
  return (
    <div className="App">

      <button onClick={handleLoginModal}>로그인창</button>
      <button onClick={handleDetailModal}>상세창</button>
      <Example></Example>
      {LoginOpen ? <Login handler={handleLoginModal}/>:null}
      {DetailOpen? <DetailModal handler={handleDetailModal}/>:null}
      {LoginOpen || DetailOpen ? <Dimmed></Dimmed>: null}
      {/*<Watch></Watch>*/}
      <MomentExample></MomentExample>
      <DayJsExample></DayJsExample>
    </div>
   
  );
}

export default App;
