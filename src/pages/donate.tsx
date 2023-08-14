/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import styles from '../styles/donate.module.css'
import cx from 'classnames'

import cashApp from '../../public/1x/cash-app.png'
import cashAppX2 from '../../public/2x/cash-app.png'
import cashAppX3 from '../../public/3x/cash-app.png'
import donation from '../../public/1x/donation.jpeg'
import donationX2 from '../../public/2x/donation.jpeg'
import donationX3 from '../../public/3x/donation.jpeg'
import paypal from '../../public/1x/paypal.png'
import paypalX2 from '../../public/2x/paypal.png'
import paypalX3 from '../../public/3x/paypal.png'
import venmo from '../../public/1x/venmo.png'
import venmoX2 from '../../public/2x/venmo.png'
import venmoX3 from '../../public/3x/venmo.png'
import zelle from '../../public/1x/zelle.png'
import zelleX2 from '../../public/2x/zelle.png'
import zelleX3 from '../../public/3x/zelle.png'

export default function Donate() {
  return (
    <div className={styles.layout}>
      <article className={styles.article}>
        <header className={styles.header}>
          <h1 className={styles.heading}>Thank You</h1>
        </header>
        <div className={styles.body}>
          <p className={styles.bodyText}>Friends & Family,</p>
          <p className={styles.bodyText}>Being here today is your greatest present to us.</p>
          <p className={styles.bodyText}>Gifts are <u>not expected</u>.</p>
          <p className={styles.bodyText}>But if you’d like, a contribution towards our honeymoon would be truly appreciated.</p>
        </div>
        <footer className={styles.footer}>
          <span className={styles.from}>from</span>
          <span className={styles.signature}>Kelly & Yan</span>
          <Buttons />
        </footer>
      </article>
      <div className={styles.pictureContainer}>
        <img
          className={cx(styles.picture, 'force-hardware-acceleration')}
          src={donation.src}
          src2x={donationX2.src}
          src3x={donationX3.src}
        />
      </div>
    </div>
  )
}

function Buttons() {
  const [showButtons, setShowButtons] = React.useState(false)
  const handleClickContribute = React.useCallback(() => {
    setShowButtons(true)
  }, [])
  return (
    <div className={styles.buttons}>
      {showButtons ? (
        <>
          <a
            className={cx(styles.button, styles.donateButton)}
            href="https://venmo.com/u/Keli46"
            target="_blank"
          >
            <img 
              className={styles.donateIcon}
              src={venmo.src}
              src2x={venmoX2.src}
              src3x={venmoX3.src}
             />
            <span className={styles.buttonText}>Venmo</span>
          </a>
          <a
            className={cx(styles.button, styles.donateButton)}
            href="https://paypal.me/yansun0"
            target="_blank"
          >
            <img 
              className={cx(styles.donateIcon, styles.paypalIcon)}
              src={paypal.src}
              src2x={paypalX2.src}
              src3x={paypalX3.src}
             />
            <span className={styles.buttonText}>Paypal</span>
          </a>
          <a
            className={cx(styles.button, styles.donateButton)}
            href="https://enroll.zellepay.com/qr-codes?data=ewogICJ0b2tlbiIgOiAia2VsbHlsaTQ2QHlhaG9vLmNvbSIsCiAgIm5hbWUiIDogIktFTExZIiwKICAiYWN0aW9uIiA6ICJwYXltZW50Igp9"
            target="_blank"
          >
            <img 
              className={styles.donateIcon}
              src={zelle.src}
              src2x={zelleX2.src}
              src3x={zelleX3.src}
             />
            <span className={styles.buttonText}>Zelle</span>
          </a>
          <a
            className={cx(styles.button, styles.donateButton)}
            href="https://cash.app/$yansun0"
            target="_blank"
          >
            <img 
              className={styles.donateIcon}
              src={cashApp.src}
              src2x={cashAppX2.src}
              src3x={cashAppX3.src}
             />
            <span className={styles.buttonText}>Cash App</span>
          </a>
        </>
      ) : (
        <button className={cx(styles.button, styles.contributeButton)} onClick={handleClickContribute}>
          <span className={styles.buttonText}>Contribute</span>
        </button>
      )}
    </div>
  )
}