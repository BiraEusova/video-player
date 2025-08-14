import './App.css'
import Preview from "./components/Preview.jsx";
import {Button, Modal} from "antd";
import {useState} from "react";
import VideoPlayer from "./components/VideoPlayer.jsx";
import {CaretRightOutlined, ShrinkOutlined} from "@ant-design/icons";

function App() {
  const [modalOpen, setModalOpen] = useState(false);


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
					<Button shape="circle" icon={<CaretRightOutlined style={{marginLeft: '2px'}}/>}/>
					<Button shape="circle" icon={<ShrinkOutlined />} />
				</>}
			>
				<VideoPlayer/>
			</Modal>
		</>
	)
}

export default App