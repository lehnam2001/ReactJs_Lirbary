import styles from './Body.module.css'
import { Row, Col } from 'react-bootstrap'
export default function Body() {
    return (
        <div className="ml-5">
            <h2 className="mt-5">
                <span className={styles.title}>
                    WORK EXPERIENCE
                </span>
            </h2>
            <Row className="mt-4">
                <Col lg={4}>
                    <h4>Project</h4>
                    <span className="mt-3">The Band</span>
                </Col>
                <Col lg={6}>
                    <h4>Technology</h4>
                    <span className="mt-3">
                    The site uses html, css bootrap, and a little animation
                    </span>
                </Col>
                <Col lg={2}>
                    <h4>Year</h4>
                    <span>7/2021</span>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col lg={4}>
                    <h4>Project</h4>
                    <span className="mt-3">Shopee Fake</span>
                </Col>
                <Col>
                    <h4>Technology</h4>
                    <span className="mt-3">
                    The site uses html, css, grid - bootrap, and a little animation
                    </span>
                </Col>
                <Col lg={2}>
                    <h4>Year</h4>
                    <span>8/2021</span>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col lg={4}>
                    <h4>Project</h4>
                    <span className="mt-3">SSG-SHOP</span>
                </Col>
                <Col>
                    <h4>Technology</h4>
                    <span className="mt-3">
                        The site uses html, css bootrap, and a little animation
                    </span>
                </Col>
                <Col lg={2}>
                    <h4>Year</h4>
                    <span>9/2021</span>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col lg={4}>
                    <h4>Project</h4>
                    <span className="mt-3">Sportify Fake</span>
                </Col>
                <Col>
                    <h4>Technology</h4>
                    <span className="mt-3">
                    The site uses html, css bootrap, and a little animation,
                    framework Angular, Typescript
                    </span>
                </Col>
                <Col lg={2}>
                    <h4>Year</h4>
                    <span>11/2021</span>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col lg={4}>
                    <h4>Project</h4>
                    <span className="mt-3">Ecommerce</span>
                </Col>
                <Col>
                    <h4>Technology</h4>
                    <span className="mt-3">
                    The site uses html, css bootrap, and a little animation,Javascript
                    Lirbary ReactJS
                    </span>
                </Col>
                <Col lg={2}>
                    <h4>Year</h4>
                    <span>12/2021</span>
                </Col>
            </Row>
            <Row className={styles.footer}>
                <h2><span className={styles.footerTitle}>References</span></h2>
                <h2>VietUcTower</h2>
            </Row>
        </div>
    )
}
