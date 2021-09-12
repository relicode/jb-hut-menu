import React, { useState } from 'react'

import styles from './styles.module.css'
import { BAHT, MenuItem } from '../../menu'

const ARROW_DOWN = '\u25BC'
const ARROW_UP = '\u25B2'

type MenuSectionProps = {
  title: string,
  menuItems: MenuItem[],
  orderItems: MenuItem[],
  setOrderItems: (value: React.SetStateAction<MenuItem[]>) => void,
}

const countItems = (orderItems: MenuItem[], item: MenuItem) => {
  const itemCount = orderItems.filter(([cat, name, price]) => (
    cat === item[0] && name === item[1] && price === item[2])
  ).length
  return itemCount ? `${itemCount}x ` : ''
}

const findAndRemoveItem = (orderItems: MenuItem[], item: MenuItem) => (
  orderItems.filter((i) => i !== orderItems.find(([cat, name, price]) => (
    cat === item[0] && name === item[1] && price === item[2])
  ))
)

const MenuSection: React.FC<MenuSectionProps> = (props): JSX.Element => {
  const { title, menuItems, orderItems, setOrderItems } = props
  const [open, setOpen] = useState(false)
  return (
    <section className={styles.section}>
      <header className={styles.header} onClick={() => { setOpen(!open) }}>
        {title} {open ? ARROW_UP : ARROW_DOWN}
      </header>
      {open && menuItems.map(([cat, name, price]) => (
        <div
          key={[title, name].join('/')}
        >
          <div className={styles.itemName}>
            <div className={styles.addButton}
              onClick={() => setOrderItems([...orderItems, [cat, name, price]])}>
            </div>
            &nbsp;
            <div className={styles.removeButton}
              onClick={() => setOrderItems(findAndRemoveItem(orderItems, [cat, name, price]))}>
            </div>
            &nbsp;
            {name}
          </div>
          <div className={styles.itemCount}>
            {countItems(orderItems, [cat, name, price])}
          </div>
          <div className={styles.itemPrice}>
            {`${price}${BAHT}`}
          </div>
        </div>
      ))}
    </section>
  )
}

export default MenuSection