/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import styles from '../styles/landing-page.module.css'
import cx from 'classnames'

import Article from './Article'
import ExpandableButtons from './ExpandableButtons'

export default function LandingPage({
  article,
  button,
  picture
}: {
  article: Omit<React.ComponentProps<typeof Article>, 'className' | 'children'>,
  button: React.ComponentProps<typeof ExpandableButtons>
  picture: {
    src: string,
    srcX2: string,
    srcX3: string 
  }
}) {
  return (
    <div className={styles.layout}>
      <Article
        className={styles.article}
        title={article.title}
        body={article.body}
      >
        <ExpandableButtons
          title={button.title}
          buttons={button.buttons}
        />
      </Article>
      <div className={styles.pictureContainer}>
        <img
          className={cx(styles.picture, 'force-hardware-acceleration')}
          srcSet={`${picture.src} 1x, ${picture.srcX2} 2x, ${picture.srcX3} 3x`}
        />
      </div>
    </div>
  )
}
