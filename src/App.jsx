import './App.css'
import Preview from "./components/Preview.jsx";
import {Button, Modal} from "antd";
import {useState} from "react";
import VideoPlayer from "./components/VideoPlayer.jsx";
import {CaretRightOutlined, PauseOutlined, ShrinkOutlined} from "@ant-design/icons";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
	const [videoPlaying, setVideoPlaying] = useState(true);

	return (
		<>
			<Preview onClick={() => setModalOpen(true)}/>
			<Modal
				width={1000}
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
						icon={<ShrinkOutlined />}
					/>
				</>}
			>
				<VideoPlayer playing={videoPlaying}/>
			</Modal>
		</>
	)
}

export default App