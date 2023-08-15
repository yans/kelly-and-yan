/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

import LandingPage from '../components/LandingPage'
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
    <LandingPage
      article={{
        title: 'Thank You',
        body: [
          'Friends & Family,',
          'Being here today is your greatest present to us.',
          <>Gifts are <u>not expected</u>.</>,
          'But if you’d like, a contribution towards our honeymoon would be truly appreciated.'
        ]
      }}
      button={{
        title: 'Contribute',
        buttons: [
          {
            title: 'Venmo',
            href: 'https://venmo.com/u/Keli46',
            icon: {
              src: {
                x1: venmo.src,
                x2: venmoX2.src,
                x3: venmoX3.src
              },
              variant: 'tight'
            }
          },
          {
            title: 'PayPal',
            href: 'https://paypal.me/yansun0',
            icon: {
              src: {
                x1: paypal.src,
                x2: paypalX2.src,
                x3: paypalX3.src
              }
            }
          },
          {
            title: 'Zelle',
            href: 'https://enroll.zellepay.com/qr-codes?data=ewogICJ0b2tlbiIgOiAia2VsbHlsaTQ2QHlhaG9vLmNvbSIsCiAgIm5hbWUiIDogIktFTExZIiwKICAiYWN0aW9uIiA6ICJwYXltZW50Igp9',
            icon: {
              src: {
                x1: zelle.src,
                x2: zelleX2.src,
                x3: zelleX3.src
              },
              variant: 'tight'
            }
          },
          {
            title: 'Cash App',
            href: 'https://cash.app/$yansun0',
            icon: {
              src: {
                x1: cashApp.src,
                x2: cashAppX2.src,
                x3: cashAppX3.src
              },
              variant: 'tight'
            }
          }
        ]
      }}
      picture={{
        src: donation.src,
        srcX2: donationX2.src,
        srcX3: donationX3.src
      }}
    />
  )
}
