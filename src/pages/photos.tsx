/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

import LandingPage from '../components/LandingPage'
import photos from '../../public/1x/photos.jpeg'
import photosX2 from '../../public/2x/photos.jpeg'
import photosX3 from '../../public/3x/photos.jpeg'
import dropbox from '../../public/1x/dropbox.png'
import dropboxX2 from '../../public/2x/dropbox.png'
import dropboxX3 from '../../public/3x/dropbox.png'
import gdrive from '../../public/1x/gdrive.png'
import gdriveX2 from '../../public/2x/gdrive.png'
import gdriveX3 from '../../public/3x/gdrive.png'
import gphotos from '../../public/1x/gphotos.png'
import gphotosX2 from '../../public/2x/gphotos.png'
import gphotosX3 from '../../public/3x/gphotos.png'

export default function Donate() {
  return (
    <LandingPage
      article={{
        title: 'Share The Love',
        body: [
          'Friends & Family,',
          'We hope you had a blast.',
          'Let’s relive this night through all the moments you have captured.',
          'Please your photos and videos through the options below, or find one of us to AirDrop it instead.'
        ]
      }}
      button={{
        title: 'Share',
        buttons: [
          {
            title: 'Google Photos',
            href: 'https://photos.app.goo.gl/2NT6igizVJuJV8d78',
            icon: {
              src: {
                x1: gphotos.src,
                x2: gphotosX2.src,
                x3: gphotosX3.src
              },
            }
          },
          {
            title: 'Google Drive',
            href: 'https://drive.google.com/drive/folders/1b2RUyeM03TxpommHgvDCt_40a85Mt6kt',
            icon: {
              src: {
                x1: gdrive.src,
                x2: gdriveX2.src,
                x3: gdriveX3.src
              },
            }
          },
          {
            title: 'DropBox',
            href: 'https://www.dropbox.com/request/6Rb4RPYhQy2aZjFxI8rs',
            icon: {
              src: {
                x1: dropbox.src,
                x2: dropboxX2.src,
                x3: dropboxX3.src
              }
            }
          }
        ]
      }}
      picture={{
        src: photos.src,
        srcX2: photosX2.src,
        srcX3: photosX3.src
      }}
    />
  )
}
