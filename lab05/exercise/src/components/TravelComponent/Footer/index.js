import React from 'react'
import { Row } from 'react-bootstrap'
import styles from './index.module.css'

export default function Footer() {
    return (
        <Row>
            <div className={styles.footer}>
                <p>&copy; Copyright 2021-2022. All Rights reverved | Designed by: buylandingpagedesign.com</p>
            </div>
        </Row>
    )
}
