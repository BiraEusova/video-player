import style from './VideoPlayer.module.css';
import ReactPlayer from 'react-player';

const VideoPlayer = ({playing}) => {

	return (
		<ReactPlayer
			playing={playing}
			muted
			preload
			loop={true}
			style={{
				width: '100%',
				height: 'auto'
			}}
		>
			<source src="src/assets/video/mountain-fog-video.webm" type="video/webm"/>
			<source src="src/assets/video/mountain-fog-video.mp4" type="video/mp4"/>
			<p>Что-то пошло не так :( Попробуйте скачать видео по
				<a download href="../assets/video/mountain-fog-video.mp4">ссылке</a>
			</p>
		</ReactPlayer>
	)
}

export default VideoPlayer