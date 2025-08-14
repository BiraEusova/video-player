import './App.css'
import Preview from "./components/Preview.jsx";
import {Button, Modal} from "antd";
import VideoPlayer from "./components/VideoPlayer.jsx";
import {ArrowsAltOutlined, CaretRightOutlined, PauseOutlined, ShrinkOutlined} from "@ant-design/icons";
import {useMachine} from "@xstate/react";
import {videoModalMachine} from "./Xstate.js";

function App() {
	const [state, send] = useMachine(videoModalMachine);
	const modalSize = state.context.modalSize;

	return (
		<>
			<Preview onClick={() => send({type: 'OPEN'})}/>
			<Modal
				className='modal'
				width={modalSize}
				title="Video player"
				centered
				open={state.matches('opened')}
				onCancel={() => send({type: 'CLOSE'})}
				footer = {<>
					<Button
						shape="circle"
						icon={
							state.matches('opened.player.playing') ?
							<PauseOutlined /> :
							<CaretRightOutlined style={{marginLeft: '2px'}}/>
						}
						onClick={() => send({type: 'BTN_PLAY'})}
					/>
					<Button
						shape="circle"
						icon={
							state.matches('opened.size.increased') ?
							<ShrinkOutlined /> :
							<ArrowsAltOutlined />
						}
						onClick={() => send({type: 'BTN_SIZE'})}
					/>
				</>}
			>
				<VideoPlayer playing={state.matches('opened.player.playing')}/>
			</Modal>
		</>
	)
}

export default App