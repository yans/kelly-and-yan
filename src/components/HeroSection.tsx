import React from 'react'
import styles from '../styles/hero.module.css'
import cx from 'classnames'

import bg2x from '../../public/2x/background.jpeg'
import bg3x from '../../public/3x/background.jpeg'

import { Date } from './Date'

export function HeroSection() {
  const sectionRef = React.useRef<HTMLDivElement | null>(null)
  const imageContainerRef = React.useRef<HTMLDivElement | null>(null)
  const imageRef = React.useRef<HTMLDivElement | null>(null)

  const hasScrolled = React.useRef<boolean>(false)
  const [showScrollPrompt, setShowScrollPrompt] = React.useState(false)
  React.useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (!hasScrolled.current) {
        setShowScrollPrompt(true)
      }
    }, 3000)
    return () => {
      window.clearTimeout(timeout)
    }
  }, [])

  const handleScroll = React.useCallback(() => {
    if (!sectionRef.current || !imageContainerRef.current || !imageRef.current) {
      return
    }
    const imageContainerOffsetTop = imageContainerRef.current.offsetTop
    const imageContainerHeight = imageContainerRef.current.offsetHeight
    const sectionHeight = sectionRef.current.offsetHeight

    if (imageContainerOffsetTop > 10) {
      hasScrolled.current = true
      setShowScrollPrompt(false)
    }

    const progression = imageContainerOffsetTop / (sectionHeight - imageContainerHeight)

    // color the image
    const grayscale = 100 * (1 - progression)
    imageRef.current.style.setProperty('filter', `grayscale(${grayscale}%)`)

    // zoom in on the image
    const dimension = 100 + progression * 75
    imageRef.current.style.setProperty('left', `${progression * -37.5}%`) // 0% -> -37.5% (-50%)
    imageRef.current.style.setProperty('top', `${progression * -67.5}%`) // 0% -> -67.5% (-90%)
    imageRef.current.style.setProperty('width', `${dimension}%`) // 100% -> 175% (-200%)
    imageRef.current.style.setProperty('height', `${dimension}%`) // 100% -> 175% (-200%)
  }, [])

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const backgroundStyle = {
    filter: 'grayscale(100%)',
    backgroundImage: `url(${bg2x.src})`,
    // backgroundImage: `-webkit-image-set(url(${bg2x.src}) 1x, url(${bg3x.src}) 3x)`
  }

  return (
    <section
      ref={sectionRef}
      className={cx(styles.section, 'clip')}>
      <div
        ref={imageContainerRef}
        className={
          cx(
            styles.imageContainer,
            'force-hardware-acceleration'
          )
        }
      >
        <div
          ref={imageRef}
          className={
            cx(
              styles.image,
              'force-hardware-acceleration'
            )
          }
          style={backgroundStyle}
        />
      </div>
      <header
        className={
          cx(
            styles.headerContainer,
            'force-hardware-acceleration',
          )
        }
      >
        <div
          className={styles.headerContent}
        >
          <Date className={styles.date} month="08" date="18" />
          {showScrollPrompt && <ScrollPrompt />}
        </div>
      </header>
    </section>
  )
}

function ScrollPrompt() {
  return (
    <svg
      className={styles.scrollPrompt}
      enable-background="new -8.369 -3.009 40.05 35.69"
      height="35.69px"
      id="Layer_1"
      version="1.1"
      viewBox="-8.369 -3.009 40.05 35.69"
      width="40.05px"
    >
      <g>
        <path
          className={styles.scrollPromptPath}
          d="M12.406,32.394l7.6-7.601l0,0l11.301-11.2c0.5-0.5,0.5-1.199,0-1.699l-2.301-2.301c-0.5-0.5-1.199-0.5-1.699,0l-14.9,14.9
          c-0.5,0.5-1.2,0.5-1.701,0l-14.8-14.9c-0.5-0.5-1.2-0.5-1.7,0l-2.199,2.2c-0.5,0.5-0.5,1.2,0,1.7l11.199,11.2l0,0l7.601,7.6
          C11.206,32.793,12.006,32.793,12.406,32.394"/>
      </g>
    </svg>
  )
}
