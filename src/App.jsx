import './App.css'
import Preview from "./components/Preview.jsx";
import {Button, Modal} from "antd";
import {useState} from "react";
import VideoPlayer from "./components/VideoPlayer.jsx";
import {ArrowsAltOutlined, CaretRightOutlined, PauseOutlined, ShrinkOutlined} from "@ant-design/icons";

const modalSizes = {
	big: 1000,
	small: 400
}
function App() {
  const [modalOpen, setModalOpen] = useState(false);
	const [videoPlaying, setVideoPlaying] = useState(true);
	const [bigModalMode, setBigModalMode] = useState(true);
	const [modalWidth, setModalWidth] = useState(modalSizes.big)

	return (
		<>
			<Preview onClick={() => setModalOpen(true)}/>
			<Modal
				className='modal'
				width={modalWidth}
				title="Video player"
				centered
				open={modalOpen}
				onOk={() => setModalOpen(false)}
				onCancel={() => setModalOpen(false)}
				footer = {<>
					<Button
						shape="circle"
						icon={videoPlaying ? <PauseOutlined /> : <CaretRightOutlined style={{marginLeft: '2px'}}/>}
						onClick={() => setVideoPlaying(!videoPlaying)}
					/>
					<Button
						shape="circle"
						icon={bigModalMode ? <ShrinkOutlined /> : <ArrowsAltOutlined />}
						onClick={() => {
							setModalWidth(bigModalMode ? modalSizes.small : modalSizes.big);
							setBigModalMode(!bigModalMode);
						}}
					/>
				</>}
			>
				<VideoPlayer playing={videoPlaying}/>
			</Modal>
		</>
	)
}

export default App