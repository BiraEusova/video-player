import style from './Preview.module.css'
import PlayIcon from '../assets/icon/play-icon.svg?react';

const Preview = ({onClick}) => {

	return (
		<div className={style.preview}>
			<button className={style.preview__button} onClick={onClick}>
				<PlayIcon className={style.preview__icon}/>
			</button>
		</div>
	)
}

export default Preview