import { data } from './dataImage'
import styles from './PhotoGallery.module.css'
import './PhotoGallery.css'
import { useState } from 'react'
export default function PhotoGallery() {
    const [model, setModel] = useState(false);
    const [tempimgUrl, setTempImgUrl] = useState('');
    const getImg = (imgUrl) => {
        setTempImgUrl(imgUrl);
        setModel(true);
    }

    return (
       <>
            <div className={model ? 'model open' : 'model'}>
                <img src={tempimgUrl} />
                <div className="close-model" onClick={() =>  setModel(false)}>
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <div className={styles.listImg}>
                {
                    data.map(element => (
                        <div 
                            className={styles.itemImg} 
                            key={element.id}
                            onClick={() => getImg(element.imgUrl)}
                        >
                            <img className={styles.img} src={element.imgUrl} alt={element.imgUrl} />
                        </div>
                    ))
                }
            </div>
       </>
    )
}