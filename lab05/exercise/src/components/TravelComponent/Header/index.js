import styles from  "./index.module.css"
import { Row, Col } from 'react-bootstrap'
export default function Header() {
    return (
        <>
            <Row className={styles.headerNavbar}>
            <Col lg={5}>
                <div className={styles.title}>
                    <h1 style={{color: '#6ab04c'}}>Travel</h1> &nbsp;
                    <h1 style={{color: '#0F2C67'}}>Agency</h1>
                </div>
            </Col>
            <Col lg={3}>
                <div>
                    <h4>Content with us: <i class="fab fa-facebook"></i> 
                    &nbsp; <i class="fab fa-twitter"></i></h4>
                </div>
            </Col>
            <Col lg={4}>
                <div className={styles.contact}>
                    <div className="mr-2 pl-3">
                        <h3><i class="fas fa-phone-square-alt"></i></h3>
                    </div>
                    <div>
                        <span>Call Us for More Infomation</span>
                        <h3>(847) 613-8094</h3>
                    </div>
                </div>
            </Col>
        </Row>
        <Row className={styles.backGroundHeader} style={{backgroundImage: `url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` }}>
           <Col className="mt-5">
                <div className={styles.discription}>
                    <h2>See what the BUZZ is all about!</h2>
                    <h1><strong>International Travel Agency</strong></h1>
                </div>
                <button className={styles.buttonHeading}>GET THE BEST OFFER</button>
           </Col>
        </Row>
        </>
    )
}
