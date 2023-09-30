import React from "react";
import KeyPad from "./Components/keyPad";

export default class DrumMachine extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			keyCodes: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
			sources: [
				"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
				"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
				"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
				"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
				"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
				"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
				"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
				"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
				"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
			],
			names: [
				"Heater 1",
				"Heater 2",
				"Heater 3",
				"Heater 4",
				"Clap",
				"Open High Hat",
				"Kick n' Hat",
				"Kick",
				"Closed High Hat",
			],
			display: "Press Power on!",
			isPowerOn: false
		};

		this.handleDisplay = (display) => {
			this.setState({...this.state, display});
		};

		this.handlePowerButton = () => {
			this.setState(prevState => ({
				...prevState,
				isPowerOn: !prevState.isPowerOn
			}))	
		}
	}

	render() {
		return (
			<div className="h-screen flex items-center justify-center text-center">
				<div
					className="bg-gradient-to-b from-gray-700 via-gray-900 to-black text-white w-[500px] flex flex-col rounded-md p-4 shadow-[10px_25px_50px_-15px_rgba(0,0,0,0.7)]"
					id="drum-machine"
				>
					<div
						className="bg-gradient-to-b from-gray-100 to-gray-300 text-yellow-600 text-center font-semibold self-center my-4 h-12 p-3 w-[300px] rounded-md"
						id="display"
					>
						{this.state.display}
					</div>
					<div className="grid grid-cols-[repeat(3,100px)] gap-x-2 gap-y-1 place-content-center my-2">
						{this.state.keyCodes.map((keyCode, index) => (
							<KeyPad
								key={index}
								keyCode={keyCode}
								source={this.state.sources[index]}
								name={this.state.names[index]}
								handleDisplay={this.handleDisplay}
								isPowerOn = {this.state.isPowerOn}
							/>
						))}
					</div>
					<div>
						<p>Volume</p>
						<input
							type="range"
							min={0}
							max={100}
							className="h-2 w-72 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700 accent-slate-200"
						/>
					</div>
					<div className="settings-container flex justify-around">
						<div>
							<p>Power</p>
							<label className="relative inline-flex items-center cursor-pointer" >
								<input type="checkbox" value="" className="sr-only peer" onChange	={this.handlePowerButton}/>
								<div className="w-16 h-9 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
								<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
							</label>
						</div>
						<div>
							<p>Change</p>
							<label className="relative inline-flex items-center cursor-pointer">
								<input type="checkbox" value="" className="sr-only peer" />
								<div className="w-16 h-9 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
								<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
							</label>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
