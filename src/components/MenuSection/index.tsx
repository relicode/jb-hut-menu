import React, { useState } from 'react'

import styles from './styles.module.css'
import { BAHT, MenuItem } from '../../menu'
import defaultImage from '../../assets/img/logo__256x256.png'

const ARROW_DOWN = '\u25BC'
const ARROW_UP = '\u25B2'

type MenuSectionProps = {
  title: string,
  menuItems: MenuItem[],
  setModalImage: React.Dispatch<React.SetStateAction<string>>,
}

const generateMenuImageUrl = (imageBaseName: string, size: 256 | 1024) => (
  imageBaseName
    ? `${process.env.PUBLIC_URL}/img/menu/${imageBaseName}__${size}x${size}.jpg`
    : imageBaseName // ''
)

const MenuSection: React.FC<MenuSectionProps> = (props): JSX.Element => {
  const { title, menuItems } = props
  const [open, setOpen] = useState(false)
  return (
    <section className={styles.section}>
      <header className={styles.header} onClick={() => { setOpen(!open) }}>
        {title} {open ? ARROW_UP : ARROW_DOWN}
      </header>
      {open && menuItems.map(([category, name, price, imageBaseName]) => (
        <div
          key={[category, title, name].join('/')}
          onClick={() => {
            props.setModalImage(generateMenuImageUrl(imageBaseName, 1024))
          }}
        >
          <div className={styles.itemImage}>
            <img src={imageBaseName
              ? generateMenuImageUrl(imageBaseName, 256)
              : defaultImage
            }/>
          </div>
          <div className={styles.itemName}>
            {name}
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
