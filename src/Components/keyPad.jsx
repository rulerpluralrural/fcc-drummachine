/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect, useRef, useState } from "react";

/**
 * @param {{ keyCode: string, source: string, name: string, handleDisplay: function, isPowerOn: boolean;}} props
 */
export default function KeyPad(props) {
	const audioRef = useRef(null);
	const [buttonIsPressed, setButtonIsPressed] = useState(false);

	function handleClick() {
		if (!audioRef.current) return;
		if (!props.isPowerOn) return;
		audioRef.current.currentTime = 0;
		audioRef.current.play();
		props.handleDisplay(props.name);
	}

	useEffect(() => {
		const handleKeydown = (e) => {
			if (!audioRef.current) return;
			if (e.key.toUpperCase() === audioRef.current.id) {
				console.log(audioRef.current);
				audioRef.current.currentTime = 0;
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
		}
	}, [props.isPowerOn]);

	return (
		<div
			className={`h-11 text-[#1b1515] p-1 rounded-[5px] cursor-pointer flex justify-center items-center font-bold transition ease-in duration-150 hover:bg-gray-300 hover:scale-105 ${
				buttonIsPressed ? "bg-gray-300 scale-105" : "bg-gray-400"
			}`}
			role="button"
			id={props.name}
			onClick={handleClick}
		>
			{props.keyCode}
			<audio ref={audioRef} src={props.source} id={props.keyCode}></audio>
		</div>
	);
}
