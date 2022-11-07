import React from 'react';
import '../../css/modal.css';

export default function Modal(props) {
  console.log(props)
  return (
    <div className="modal">
      <div className="modal_wrapper">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
          {props.children}
          <button className="button" onClick={props.handler}>취소</button>
      </div>
    </div>
  )
}
