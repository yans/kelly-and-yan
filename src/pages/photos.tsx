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
import onedrive from '../../public/1x/onedrive.png'
import onedriveX2 from '../../public/2x/onedrive.png'
import onedriveX3 from '../../public/3x/onedrive.png'

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
            title: 'Google Drive',
            href: '#',
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
            href: '#',
            icon: {
              src: {
                x1: dropbox.src,
                x2: dropboxX2.src,
                x3: dropboxX3.src
              }
            }
          },
          {
            title: 'OneDrive',
            href: '#',
            icon: {
              src: {
                x1: onedrive.src,
                x2: onedriveX2.src,
                x3: onedriveX3.src
              },
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
