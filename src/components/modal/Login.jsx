import React from 'react';
import Modal from './Modal';

export default function Login(props){
  return(
    <Modal title="Login" description="Login" handler={props.handler}>
      <form>
        <label htmlFor='id'>ID:</label>
        <input id="id"></input>
        <br></br>
        <label htmlFor='pw'>PW:</label>
        <input id="pw"></input>
      </form>
    </Modal>
  )
}
