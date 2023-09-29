import React from "react";

// export default class KeyPad extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		/**@type {React.RefObject<HTMLAudioElement>} */
// 		this.audioRef = React.createRef(null);
// 		this.state = {
// 			texts: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
// 			sources: [
// 				"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
// 				"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
// 				"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
// 				"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
// 				"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
// 				"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
// 				"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
// 				"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
// 				"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
// 			],
// 			describe: [
// 				"Heater 1",
// 				"Heater 2",
// 				"Heater 3",
// 				"Heater 4",
// 				"Clap",
// 				"Open High Hat",
// 				"Kick n' Hat",
// 				"Kick",
// 				"Closed High Hat",
// 			],
// 		};

// 		this.renderPadElement = this.state.texts.map((text, index) => {
// 			return (
// 				<div
// 					className="bg-gray-400 h-11 text-[#1b1515] p-1 rounded-[5px] cursor-pointer flex justify-center items-center font-bold hover:bg-gray-300"
// 					role="button"
// 					key={index}
// 					onClick={() => {
// 						console.log(this.audioRef.current);
// 					}}
// 				>
// 					{text}
// 					<audio
// 						ref={this.audioRef}
// 						src={this.state.sources[index]}
// 						id={text}
// 					></audio>
// 				</div>
// 			);
// 		});

// 		// document.addEventListener("keydown", this.handleKeyBoard);
// 	}

// 	render() {
// 		return (
// 			<div className="grid grid-cols-[repeat(3,100px)] gap-x-2 gap-y-1 place-content-center my-2">
// 				{this.renderPadElement}
// 			</div>
// 		);
// 	}
// }

export default function KeyPad() {
	const audioRef = React.useRef(null);

	const texts = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
	const sources = [
		"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
		"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
		"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
		"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
		"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
		"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
		"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
		"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
		"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
	];

	function renderPadElement() {
		return texts.map((text, index) => {
			return (
				<div
					className="bg-gray-400 h-11 text-[#1b1515] p-1 rounded-[5px] cursor-pointer flex justify-center items-center font-bold hover:bg-gray-300"
					role="button"
					key={index}
					onClick={handleEvent}
				>
					{text}
					<audio ref={audioRef} src={sources[index]} id={text}></audio>
				</div>
			);
		});
	}

    function handleEvent() {
        console.log(audioRef.current)
    }

	return (
		<div className="grid grid-cols-[repeat(3,100px)] gap-x-2 gap-y-1 place-content-center my-2">
			{renderPadElement()}
		</div>
	);
}
