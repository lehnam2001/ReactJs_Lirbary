import imgUser from  '../../../assets/img/imgUser.jpg'
import { Row, Col } from 'react-bootstrap'
import styles from  "./header.module.css"
export default function Header() {
    return (
        <header>
           <Row>
                <Col lg={4} md={12} sm={12} xs={12} className="p-0">
                    <img className={styles.imgUser} src={imgUser} alt="imageUser" />
                </Col>
                <Col lg={8} md={12} sm={12} xs={12} className="pl-5 pr-5">
                    <h2 className="mt-5"><span className={styles.title}>Frofile</span></h2>
                    <div className={styles.description}>
                       <strong>
                            Hello, my full name is Le Hoai Nam,
                            I am 20 years old this year, currently I live 
                            in Binh Thuan, I am a student of VietUcTower school,
                            currently I am in 3rd semester and studying ReactJS Libary. 
                            And studying online at home. I hope the epidemic will end soon so
                            I can go back to school
                       </strong>
                    </div>
                    <div className="mt-3 mb-3">
                        <strong>Current lucking for a suitable position with a repultable company</strong>
                    </div>
                </Col>
           </Row>
           <Row className={styles.headerInfo}>
                <Col lg={5} md={12} sm={12} xs={12} >
                    <div className={styles.headerTitle}>Professional Title</div>
                </Col>
                <Col lg={7} md={12} sm={12} xs={12} >
                    <div><h1 className={styles.name}>Lê Hoài Nam</h1></div>
                </Col>
           </Row>
        </header>
    )
}
