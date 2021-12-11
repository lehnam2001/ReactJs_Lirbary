import { Container } from 'react-bootstrap';
import styles from "./index.module.css"
import Header from './Header';
import Navigation from "./Navigation"
import Body from './Body'
import Footer from './Footer'
export default function TravelComponent() {
    return (
        <Container className={styles.container}>
            <Header />
            <Navigation />
            <Body />
            <Footer/>
        </Container>
    )
}
