import React from "react";

export default class DrumMachine extends React.Component {
	render() {
		return (
			<div className="h-screen flex items-center justify-center text-center font-[system-ui, sans]">
				<div
					className="bg-gray-300 text-dark w-[500px] flex flex-col rounded-md"
					id="drum-machine"
				>
					<div className="bg-black text-white self-center m-4 p-2 w-[300px] rounded-md" id="display">
						display
					</div>
					<div className="pad-container">
						<div className="drum-pad">
							<audio
								src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
								className="clip"
								id="Q"
							></audio>
							Q
						</div>
						<div className="drum-pad">
							<audio
								src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
								className="clip"
								id="Q"
							></audio>
							W
						</div>
						<div className="drum-pad">
							<audio
								src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
								className="clip"
								id="Q"
							></audio>
							E
						</div>
						<div className="drum-pad">
							<audio
								src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
								className="clip"
								id="Q"
							></audio>
							A
						</div>
						<div className="drum-pad">
							<audio
								src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
								className="clip"
								id="Q"
							></audio>
							S
						</div>
						<div className="drum-pad">
							<audio
								src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
								className="clip"
								id="Q"
							></audio>
							D
						</div>
						<div className="drum-pad">
							<audio
								src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
								className="clip"
								id="Q"
							></audio>
							Z
						</div>
						<div className="drum-pad">
							<audio
								src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
								className="clip"
								id="Q"
							></audio>
							X
						</div>
						<div className="drum-pad">
							<audio
								src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
								className="clip"
								id="Q"
							></audio>
							C
						</div>
					</div>
					<div className="settings-container">
						<div>
                            <p>Power</p>
							<label className="relative inline-flex items-center cursor-pointer">
								<input type="checkbox" value="" className="sr-only peer" />
								<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
								<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
								</span>
							</label>
						</div>
						<div>
                            <p>Change</p>
							<label className="relative inline-flex items-center cursor-pointer">
								<input type="checkbox" value="" className="sr-only peer" />
								<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
								<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
								</span>
							</label>
						</div>
                        <div>
                            <p>Volume</p>
                            <input type="range" />
                        </div>
					</div>
				</div>
			</div>
		);
	}
}
