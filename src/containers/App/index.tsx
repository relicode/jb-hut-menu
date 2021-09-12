import React, { useState } from 'react'

import './styles.css'
import MenuSection from '../../components/MenuSection'
import menu, { BAHT, menuCategory, MenuItem } from '../../menu'

const increment = (() => {
  let counter = 0
  return () => {
    counter += 1
    return counter
  }
})()

const App: React.FC = (): JSX.Element => {
  const [orderItems, setOrderItems] = useState<MenuItem[]>([])
  const [orderFinished, setOrderFinished] = useState<boolean>(false)

  return (
    <>
      <header className="header">🌴 J.B Hut Menu 🌴</header>

      <div className="sections">
        {!orderFinished ? menuCategory.map((category) => (
          <MenuSection
            key={category}
            title={category}
            menuItems={menu.filter(([c]) => c === category)}
            orderItems={orderItems}
            setOrderItems={setOrderItems}
          />
        )) : (
          <div className="order-summary">
            <ol>
              {orderItems.map(([cat, name, price]) => (
                <li key={increment()}>
                  {`${cat} / ${name} - ${price}${BAHT}`}
                </li>
              ))}
            </ol>
            <div>---</div>
            <div>{orderItems.reduce((acc, cur) => acc + cur[2], 0)}{BAHT}</div>
          </div>
        )}
      </div>

      <footer className="footer">
        <button onClick={() => setOrderFinished(!orderFinished)}>
          {orderFinished
            ? 'See menu'
            : `See order ${orderItems.reduce((acc, cur) => acc + cur[2], 0)}${BAHT}`}
        </button>
        {orderFinished && <span>&nbsp;<button onClick={() => setOrderItems([])}>
          Clear order
        </button></span>}
      </footer>
    </>
  )
}

export default App