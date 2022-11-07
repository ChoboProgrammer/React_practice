import React from 'react'
import Modal from './Modal'
export default function DetailModal(props) {
  return (
    <Modal title="Detail" description="디테일창" handler={props.handler}>
      <div>디테일 창입니다~</div>
      <div>사진사진~!</div>
    </Modal>
  )
}
