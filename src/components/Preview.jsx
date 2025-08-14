import style from './preview.module.css'
import PlayIcon from '../assets/play-icon.svg?react';

const Preview = () => {

    return (
        <div className={style.preview}>
            <button className={style.preview__button}>
                <PlayIcon className={style.preview__icon}/>
            </button>
        </div>
    )
}

export default Preview