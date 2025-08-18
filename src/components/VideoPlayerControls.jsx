import style from "./VideoPlayerControls.module.css";
import {Button} from "./ui/Button.jsx";
import PauseIcon from "../assets/icon/pause-icon.svg?react";
import PlayIcon from "../assets/icon/play-icon.svg?react";
import CompressIcon from "../assets/icon/compress-icon.svg?react";
import ExpandIcon from "../assets/icon/expand-icon.svg?react";
import MutedIcon from "../assets/icon/muted-icon.svg?react";
import UnmutedIcon from "../assets/icon/unmuted-icon.svg?react";
import Slider from "./ui/Slider.jsx";

const VideoPlayerControls = ({state, send, onVolumeChange}) => {

	return (
		<div className={style.controls}>
			<div className={style.controls__rightGroup}>
				<Button onClick={() => send({type: 'BTN_PLAY'})}>
					{ state.matches('opened.playback.playing') ?
						<PauseIcon /> :
						<PlayIcon />
					}
				</Button>
				<Button onClick={() => send({type: 'BTN_MUTE'})}>
					{
						state.matches('opened.muting.muted') ?
							<MutedIcon /> :
							<UnmutedIcon />
					}
				</Button>
				<Slider
					onChange={onVolumeChange}
					disabled={!!state.matches('opened.muting.muted')}
				/>
			</div>
			<Button onClick={() => send({type: 'BTN_SIZE'})}>
				{
					state.matches('opened.size.increased') ?
						<CompressIcon /> :
						<ExpandIcon />
				}
			</Button>
		</div>
	)
}

export default VideoPlayerControls;