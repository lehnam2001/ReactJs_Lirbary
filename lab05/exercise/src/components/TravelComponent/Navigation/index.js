import { Row, Col } from 'react-bootstrap'
import styles from './index.module.css'
export default function Navigation() {
    return (
        <Row style={{backgroundColor: '#dcdde1'}}>
            <Col>
                <div className={styles.navigationWrap}>
                    <div className={styles.itemNav}>
                        <h2><i class="fas fa-comments"></i></h2>
                        <h4>Consulting</h4>
                    </div>
                        
                    <div className={styles.itemNav}>
                        <h2><i class="fas fa-plane"></i></h2>
                        <h4>Travel Guide</h4>
                    </div>

                    <div className={styles.itemNav}>
                        <h2><i class="fas fa-hotel"></i></h2>
                        <h4>Hotel info</h4>
                    </div>
                </div>
            </Col>
        </Row>
    )
}
