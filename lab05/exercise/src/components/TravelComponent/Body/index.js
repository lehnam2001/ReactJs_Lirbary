import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from './index.module.css'
import pic1 from "../../../assets/img/overview1.jfif"
import pic2 from "../../../assets/img/overview2.jfif"
import pic3 from "../../../assets/img/overview3.jfif"
export default function Body() {
    return (
        <>
            <Row className={styles.bodyTitle}>
                <Col> 
                    <h1><strong>What We Offer</strong></h1>
                    <p className={styles.bodyDescription}>Lorem ipsum is simply dummy text of the printing and typesetting industry</p>
                </Col>
            </Row>
            <Row>
                <div className={styles.overview}>
                    <div className={styles.item}>
                        <img className={styles.imgItem} src={pic1} alt="" />
                        <p className="mt-2"><strong>LOREM IPSUM DOLAR</strong></p>
                        <span className={styles.discriptionItem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.imgItem} src={pic2} alt="" />
                        <p className="mt-2"><strong>SED UP PERSPICIATIS</strong></p>
                        <span className={styles.discriptionItem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.imgItem} src={pic3} alt="" />
                        <p className="mt-2"><strong>TEMPOR INCIDIDUNT</strong></p>
                        <span className={styles.discriptionItem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    </div>
                </div>
            </Row>
        </>
    )
}
