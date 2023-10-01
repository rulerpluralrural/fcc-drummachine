import React from "react";
import KeyPad from "./keyPad";

const filesA = {
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
};

const filesB = {
	keyCodes: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
	sources: [
		"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
		"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
		"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
		"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
		"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
		"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
		"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
		"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
		"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
	],
	names: [
		"Chord 1",
		"Chord 2",
		"Chord 3",
		"Chord 4",
		"Shaker",
		"Open High Hat",
		"Punchy Kick",
		"Side Stick",
		"Snare",
	],
};

export default class DrumMachine extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			files: filesA,
			display: "",
			isPowerOn: false,
			isChangeOn: false,
			volumeVal: 0.5,
		};

		this.handleDisplay = (display) => {
			this.setState({ ...this.state, display });
		};

		this.handlePowerButton = () => {
			this.setState((prevState) => ({
				...prevState,
				isPowerOn: !prevState.isPowerOn,
			}));
		};

		this.handleChangeButton = () => {
			this.setState((prevState) => ({
				...prevState,
				isChangeOn: !prevState.isChangeOn,
				files: !this.state.isChangeOn ? filesB : filesA,
			}));
		};

		this.adjustVolume = (e) => {
			if (this.state.isPowerOn) {
				this.setState({
					volumeVal: e.target.value,
				});
			}
		};
	}

	render() {
		return (
			<div className="h-screen flex items-center justify-center text-center">
				<div
					className="bg-gradient-to-b from-gray-700 via-gray-900 to-black text-white w-[500px] flex flex-col rounded-md p-4 shadow-[10px_25px_50px_-15px_rgba(0,0,0,0.7)]"
					id="drum-machine"
				>
					<div
						className={`rounded-full h-5 w-5 border-double border-4 ${
							this.state.isPowerOn
								? "bg-green-500  border-green-300"
								: "bg-gray-600 border-gray-300"
						}`}
					></div>
					<div
						className="bg-gradient-to-b from-gray-100 to-gray-300 text-red-700 text-center font-semibold self-center my-4 h-12 p-3 w-[300px] rounded-md"
						id="display"
					>
						{this.state.isPowerOn && this.state.display}
					</div>
					<div className="grid grid-cols-[repeat(3,100px)] gap-x-3 gap-y-2 place-content-center my-2">
						{this.state.files.keyCodes.map((keyCode, index) => {
							return (
								<KeyPad
									key={index}
									keyCode={keyCode}
									source={this.state.files.sources[index]}
									name={this.state.files.names[index]}
									handleDisplay={this.handleDisplay}
									isPowerOn={this.state.isPowerOn}
									isChangeOn={this.state.isChangeOn}
									volumeVal={this.state.volumeVal}
								/>
							);
						})}
					</div>
					<div>
						<p>Volume</p>
						<input
							type="range"
							min={0}
							max={1}
							step={0.01}
							value={this.state.volumeVal}
							onChange={this.adjustVolume}
							className="h-2 w-72 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700 accent-slate-200"
						/>
					</div>
					<div className="settings-container flex justify-around items-center text-center">
						<div>
							<p className="mr-2">Power</p>
							<label className="relative inline-flex items-center cursor-pointer">
								<input
									type="checkbox"
									value=""
									className="sr-only peer"
									onChange={this.handlePowerButton}
								/>
								<div className="w-16 h-9 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
								<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
							</label>
						</div>
						<div>
							<p className="mr-2">Change</p>
							<label className="relative inline-flex items-center cursor-pointer">
								<input
									type="checkbox"
									value=""
									className="sr-only peer"
									onChange={this.handleChangeButton}
								/>
								<div className="w-16 h-9 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
								<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
							</label>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
