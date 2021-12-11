import { useEffect, useState, useRef } from 'react'
import { Container, Row } from 'react-bootstrap'
import styles from './CountdownTimer.module.css'
export default function CountdownTimer() {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();
    
    const startTimer = () => {
        const countdonwDate = new Date ('February 1, 2022 00:00:00').getTime();
        
        interval.current = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdonwDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60 )) / 1000);

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }

        }, 1000);
    };

    useEffect(() => {
        startTimer();

        return () => {
            clearInterval(interval.current)
        }
    })

    return (
        <Container className={styles.container}>
            <Row>
                <div className={styles.title}>
                    <h1><strong>We're are comming soon </strong></h1>
                    <h4>We are working very hard on the new version of our site.</h4>
                    <h4>It will bring a lot of new features. Stay tuned!</h4>
                </div>
            </Row>
            <Row>
                <div className={styles.list}>
                    <div className={styles.item}>
                        <h1><strong>{timerDays}</strong></h1>
                        <p>Days</p>
                    </div>
                    <div className={styles.item}>
                        <h1><strong>{timerHours}</strong></h1>
                        <p>Hours</p>
                    </div>
                    <div className={styles.item}>
                        <h1><strong>{timerMinutes}</strong></h1>
                        <p>Minutes</p>
                    </div>
                    <div className={styles.item}>
                        <h1><strong>{timerSeconds}</strong></h1>
                        <p>Seconds</p>
                    </div>
                </div>
            </Row>
            <Row>
                <h1 className={styles.footer}>Happy Lunar New Year</h1>
            </Row>
        </Container>
    )
}
