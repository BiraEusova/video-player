import style from './VideoPlayer.module.css'

const VideoPlayer = () => {

	return (
		<video
			className={style.videoPlayer}
			autoPlay
			muted
			preload
			loop
		>
			<source src="src/assets/video/mountain-fog-video.webm" type="video/webm"/>
			<source src="src/assets/video/mountain-fog-video.mp4" type="video/mp4"/>
			<p>Что-то пошло не так :( Попробуйте скачать видео по
				<a download href="../assets/video/mountain-fog-video.mp4">ссылке</a>
			</p>
		</video>
	)
}

export default VideoPlayer