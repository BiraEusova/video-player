import './App.css'
import Preview from "./components/Preview.jsx";
import {Modal} from "antd";
import VideoPlayer from "./components/VideoPlayer.jsx";
import {useMachine} from "@xstate/react";
import {videoModalMachine} from "./Xstate.js";
import VideoPlayerControls from "./components/VideoPlayerControls.jsx";

function App() {
	const [state, send] = useMachine(videoModalMachine);

	return (
		<>
			<Preview onClick={() => send({type: 'OPEN'})}/>
			<Modal
				className='modal'
				width={state.context.modalSize}
				title="Video player"
				centered
				open={state.matches('opened')}
				onCancel={() => send({type: 'CLOSE'})}
				footer = {<VideoPlayerControls state={state} send={send}/>}
			>
				<VideoPlayer playing={state.matches('opened.player.playing')}/>
			</Modal>
		</>
	)
}

export default App