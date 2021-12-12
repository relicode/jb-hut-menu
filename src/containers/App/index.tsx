import React from 'react'

import './styles.css'
import MenuSection from '../../components/MenuSection'
import menu, { menuCategory } from '../../menu'

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <header className="header">🌴 J.B Hut Menu 🌴</header>
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