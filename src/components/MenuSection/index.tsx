import React, { useState } from 'react'

import styles from './styles.module.css'
import {
  BAHT, SMALL_IMAGE_LENGTH, LARGE_IMAGE_LENGTH,
} from '../../constants'
import { MenuItem } from '../../menu'
import defaultImage from '../../assets/img/logo__256x256.png'

const ARROW_DOWN = '\u25BC'
const ARROW_UP = '\u25B2'

type MenuSectionProps = {
  title: string,
  menuItems: MenuItem[],
  setModalImage: React.Dispatch<React.SetStateAction<string>>,
}

const generateMenuImageUrl = (
  imageBaseName: string,
  size: typeof SMALL_IMAGE_LENGTH | typeof LARGE_IMAGE_LENGTH
) => (
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
            props.setModalImage(generateMenuImageUrl(imageBaseName, LARGE_IMAGE_LENGTH))
          }}
        >
          <div className={styles.itemImage}>
            <img src={imageBaseName
              ? generateMenuImageUrl(imageBaseName, SMALL_IMAGE_LENGTH)
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