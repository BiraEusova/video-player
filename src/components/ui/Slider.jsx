import style from "./Slider.module.css";
import {useState} from "react";

const Slider = (
	{
		onChange,
		value = 50,
		disabled
	}) => {

	const [curValue, setCurValue] = useState(value);

	const handleInputRange = (e) => {
		setCurValue(e.target.value);
	}

	return (
		<div className={style.slider}>
			<div className={style.slider__track}></div>
			<div
				className={`${style.slider__progress} ${disabled ? style.slider__progress_disabled : ''}`}
				style={{width: `${curValue}%`}}
			></div>
			<input
				className={style.slider__input}
				disabled={disabled}
				type="range"
				min="0"
				max="100"
				value={curValue}
				step="1"
				onChange={() => onChange(curValue)}
				onInput={(e) => handleInputRange(e)}
			/>
		</div>
	)
}

export default Slider;