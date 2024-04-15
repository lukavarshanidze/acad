import React from "react"
import styles from './heading.module.scss'

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div className={styles.heading} id='heading'>
        <h3>{subtitle} </h3>
        <h1>{title} </h1>
      </div>
    </>
  )
}

export default Heading
