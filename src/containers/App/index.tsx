import React from 'react'

import './styles.css'
import MenuSection from '../../components/MenuSection'
import menu, { menuCategory } from '../../menu'
import logo from '../../assets/img/jb-hut__900x300.jpg'

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <header className="header">
        <img src={logo} />
      </header>
      <div className="sections">
        {menuCategory.map((category) => (
          <MenuSection
            key={category}
            title={category}
            menuItems={menu.filter(([c]) => c === category)}
          />
        ))}
      </div>
    </>
  )
}

export default App