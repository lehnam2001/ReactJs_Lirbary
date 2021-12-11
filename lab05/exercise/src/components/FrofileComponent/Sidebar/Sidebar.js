import styles from "./Sidebar.module.css"
import ProgressBar from 'react-bootstrap/ProgressBar'
export default function Sidebar() {
    return (
        <div>
            <div className={styles.contact}>
                <div className="pl-3">
                    <h3 className="pt-5">CONTACT</h3>
                    <div className="mt-3">
                        <i class="fas fa-map-marker-alt"></i>
                        <span className="ml-3">39 - Mepu - Đức Linh - Bình Thuận</span>
                    </div>
                    <div className="mt-3">
                        <i class="fas fa-phone-square-alt"></i>
                        <span className="ml-3">0363556909</span>
                    </div>
                    <div className="mt-3">
                        <i class="fas fa-envelope-square"></i>
                        <span className="ml-3">Lehnam2991@gmail.com</span>
                    </div>
                    <div className="mt-3 pb-5">
                        <i class="fab fa-facebook-f"></i>
                        <span className="ml-3">Lê Hoài Nam</span>
                    </div>
                </div>
            </div>
            <div className={styles.expertise}>
                <div className="pl-3">
                    <h3 className="pt-5">EXPERTISE</h3>
                    <div className="mt-3 d-flex align-items-center">
                        <span className={styles.language}>HTML-CSS</span>
                        <ProgressBar className={styles.progressExpertise} striped variant="warning" now={80} />
                    </div>
                    <div className="mt-3 d-flex align-items-center">
                        <span className={styles.language}>Javascript</span>
                        <ProgressBar className={styles.progressExpertise} striped variant="warning" now={70} />
                    </div>
                    <div className="mt-3 d-flex align-items-center">
                        <span className={styles.language}>Angular</span>
                        <ProgressBar className={styles.progressExpertise} striped variant="warning" now={50} />
                    </div>
                    <div className="mt-3 pb-5 d-flex align-items-center">
                        <span className={styles.language}>ReactJS</span>
                        <ProgressBar className={styles.progressExpertise} striped variant="warning" now={60} />
                    </div>
                </div>
            </div>
            <div className={styles.education}>
                <div className="pl-3">
                    <h3 className="pt-5">EDUCATION</h3>
                    <div className="mt-3 d-flex">
                        <span className={styles.school}>THCS Lê Thánh Tông</span>
                        <span>2012-2016</span>
                    </div>
                    <div className="mt-3 d-flex">
                        <span className={styles.school}>THPT Quang Trung</span>
                        <span>2016-2019</span>
                    </div>
                    <div className="mt-3 pb-5 d-flex">
                        <span className={styles.school}>VietUcTower</span>
                        <span>2019-2021</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
