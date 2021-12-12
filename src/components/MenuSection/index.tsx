import React, { useState } from 'react'

import styles from './styles.module.css'
import { BAHT, MenuItem } from '../../menu'

const ARROW_DOWN = '\u25BC'
const ARROW_UP = '\u25B2'

type MenuSectionProps = {
  title: string,
  menuItems: MenuItem[],
}

const MenuSection: React.FC<MenuSectionProps> = (props): JSX.Element => {
  const { title, menuItems } = props
  const [open, setOpen] = useState(false)
  return (
    <section className={styles.section}>
      <header className={styles.header} onClick={() => { setOpen(!open) }}>
        {title} {open ? ARROW_UP : ARROW_DOWN}
      </header>
      {open && menuItems.map(([, name, price]) => (
        <div
          key={[title, name].join('/')}
        >
          <div className={styles.itemName}>{name}</div>
          <div className={styles.itemPrice}>
            {`${price}${BAHT}`}
          </div>
        </div>
      ))}
    </section>
  )
}

export default MenuSection