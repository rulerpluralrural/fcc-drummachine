/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";

/**
 * @param {{ keyCode: string, source: string, name: string, handleDisplay: function, isPowerOn: boolean, isChangeOn: boolean, volumeVal: number;}} props
 */
export default function KeyPad(props) {
	const audioRef = useRef(null);
	const [buttonIsPressed, setButtonIsPressed] = useState(false);

	function handleClickDown() {
		if (!audioRef.current) return;
		if (!props.isPowerOn) return;
		audioRef.current.currentTime = 0;
		audioRef.current.volume = props.volumeVal
		audioRef.current.play();
		props.handleDisplay(props.name);
		setButtonIsPressed(true);
	}

	function handleClickUp() {
		if (!audioRef.current) return;
		setButtonIsPressed(false);
	}

	useEffect(() => {
		const handleKeydown = (e) => {
			if (!audioRef.current) return;
			if (e.key.toUpperCase() === audioRef.current.id) {
				audioRef.current.currentTime = 0;
				audioRef.current.volume = props.volumeVal
				audioRef.current.play();
				props.handleDisplay(props.name);
				setButtonIsPressed(true);
			}
		};

		const handleKeyUp = (e) => {
			if (!audioRef.current) return;
			if (e.key.toUpperCase() === audioRef.current.id) {
				setButtonIsPressed(false);
			}
		};

		if (props.isPowerOn) {
			window.addEventListener("keydown", handleKeydown);
			window.addEventListener("keyup", handleKeyUp);
		} else {
			window.removeEventListener("keydown", handleKeydown);
			window.removeEventListener("keyup", handleKeyUp);
		}

		return () => {
			window.removeEventListener("keydown", handleKeydown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, [props.isPowerOn, props.isChangeOn, props.volumeVal]);

	return (
		<div
			className={`h-11 text-[#1b1515] p-1 rounded-[5px] cursor-pointer flex justify-center items-center font-bold transition linear duration-150 ${
				buttonIsPressed && props.isPowerOn
					? "shadow-none bg-gray-300 scale-95"
					: "bg-gray-400 shadow-[2px_2px_5px_rgba(0,0,0,0.7)] "
			}`}
			role="button"
			id={props.name}
			onMouseDown={handleClickDown}
			onMouseUp={handleClickUp}
		>
			{props.keyCode}
			<audio ref={audioRef} src={props.source} id={props.keyCode}></audio>
		</div>
	);
}
