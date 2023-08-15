/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import styles from '../styles/article.module.css'
import cx from 'classnames'

export default function Article({
  body,
  children,
  className,
  title,
}: {
  title: string
  body: Array<React.ReactNode>
  children: React.ReactNode
  className?: string
}) {
  return (
    <article className={cx(styles.article, className)}>
      <header className={styles.header}>
        <h1 className={styles.heading}>{title}</h1>
      </header>
      <div className={styles.body}>
        {body.map((paragraph, i) => <p key={i} className={styles.bodyText}>{paragraph}</p>)}
      </div>
      <footer className={styles.footer}>
        <span className={styles.from}>from</span>
        <span className={styles.signature}>Kelly & Yan</span>
        {children}
      </footer>
    </article>
  )
}
