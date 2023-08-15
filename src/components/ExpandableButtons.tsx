/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import styles from '../styles/expandable-buttons.module.css'
import cx from 'classnames'

export default function ExpandableButtons({
  buttons,
  title
} : {
  buttons: Array<{
    title: string,
    icon: {
      src: {
        x1: string
        x2: string
        x3: string
      }
      variant?: 'tight' | 'default'
    }
    href: string
  }>
  title: string
}) {
  const [showButtons, setShowButtons] = React.useState(false)
  const handleClickContribute = React.useCallback(() => {
    setShowButtons(true)

    window.setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }, 50)
  }, [])
  return (
    <div className={styles.buttons}>
      {showButtons ? (
        <>
          {buttons.map(button =>
            (<a
              key={button.href}
              className={cx(styles.button, styles.expandedButton)}
              href={button.href}
              rel="noreferrer"
              target="_blank"
            >
              <img
                className={cx(styles.expandedButtonIcon, button.icon.variant === 'tight' ? styles.expandedButtonTight : styles.expandedButtonDefault, 'force-hardware-acceleration')}
                src={button.icon.src.x1}
                srcSet={`${button.icon.src.x1} 1x, ${button.icon.src.x2} 2x, ${button.icon.src.x3} 3x`}
              />
              <span className={styles.buttonText}>{button.title}</span>
            </a>)
          )}
        </>
      ) : (
        <button className={cx(styles.button, styles.initialButton)} onClick={handleClickContribute}>
          <span className={styles.buttonText}>{title}</span>
        </button>
      )}
    </div>
  )
}
