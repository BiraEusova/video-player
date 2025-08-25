import './App.css'
import Preview from "./components/Preview.jsx";
import {Modal} from "antd";
import VideoPlayer from "./components/VideoPlayer.jsx";
import {useMachine} from "@xstate/react";
import {videoModalMachine} from "./Xstate.js";
import VideoPlayerControls from "./components/VideoPlayerControls.jsx";
import {useState} from "react";

function App() {
	const [state, send] = useMachine(videoModalMachine);
	const [volume, setVolume] = useState(50);

	return (
		<>
			<Preview onClick={() => send({type: 'OPEN'})}/>
				{state.matches('opened') && (
					<Modal
					className='modal'
					width={state.context.modalSize}
					title="Video player"
					centered
					open={state.matches('opened')}
					onCancel={() => send({type: 'CLOSE'})}
					footer = {
						<VideoPlayerControls
							state={state}
							send={send}
							onVolumeChange={setVolume}
						/>
					}
				>
						<VideoPlayer
							playing={state.matches('opened.playback.playing')}
							muted={state.matches('opened.muting.muted')}
							volume={volume}
						/>
				</Modal>
				)}
		</>
	)
}

export default App