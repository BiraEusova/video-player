import ReactPlayer from 'react-player';

const VideoPlayer = ({playing, muted, volume}) => {

	return (
		<ReactPlayer
			playing={playing}
			muted={muted}
			preload={'true'}
			volume={volume/100}
			loop={true}
			style={{
				width: '100%',
				height: 'auto'
			}}
		>
			<source src="src/assets/video/mountain-fog-video.webm" type="video/webm"/>
			<source src="src/assets/video/mountain-fog-video.mp4" type="video/mp4"/>
		</ReactPlayer>
	)
}

export default VideoPlayer