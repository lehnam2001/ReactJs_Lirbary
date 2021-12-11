import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar'
import Body from './Body/Body'
import styles from "./index.module.css";
export default function Frofile() {
    return (
        <Container className={styles.container}>
            <Row>
                <Col lg={12}>
                    <Header/>
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={12} sm={12} xs={12} className="p-0">
                    <Sidebar />
                </Col>

                <Col lg={8} md={12} sm={12} xs={12} className="p-0">
                    <Body />
                </Col>
            </Row>
        </Container>
    )
}
