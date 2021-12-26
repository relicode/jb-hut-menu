import React, { useState } from 'react'

import './styles.css'
import MenuSection from '../../components/MenuSection'
import menu, { menuCategory } from '../../menu'
import logo from '../../assets/img/jb-hut__900x300.jpg'
import Modal from 'react-modal'
import defaultImage from '../../assets/img/logo__256x256.png'

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '5px',
  },
}

Modal.setAppElement('#app')

const App: React.FC = (): JSX.Element => {
  const [modalImage, setModalImage] = useState('')
  return (
    <>
      <Modal
        isOpen={modalImage ? true : false}
        onRequestClose={() => { setModalImage('') }}
        style={modalStyles}
      >
        <img
          className="modal-image"
          onClick={() => { setModalImage('') }}
          src={modalImage || defaultImage}
        />
      </Modal>
      <header className="header">
        <img src={logo} />
      </header>
      <div className="sections">
        {menuCategory.map((category) => (
          <MenuSection
            key={category}
            title={category}
            menuItems={menu.filter(([c]) => c === category)}
            setModalImage={setModalImage}
          />
        ))}
      </div>
    </>
  )
}

export default App