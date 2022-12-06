import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

import cx from 'classnames'
import styles from '../styles/index.module.css'

import { HeroSection } from '../components/HeroSection'
import { MemoriesSection } from '../components/MemoriesSection'
import { InviteSection } from '../components/InviteSection'

export default function Home() {
  const [isLoaded, setLoaded] = React.useState(false)
  React.useEffect(() => {
    const timeout = window.setTimeout(() => {
      setLoaded(true)
    }, 1000)
    return () => {
      window.clearTimeout(timeout)
    }
  }, [])
  return (
    <div className={cx(styles.page, !isLoaded && styles.pageLoading)}>
      <HeroSection />
      <MemoriesSection />
      <InviteSection />
    </div>
  )
}
