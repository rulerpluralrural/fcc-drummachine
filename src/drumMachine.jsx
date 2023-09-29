import React from "react";
import KeyPad from "./Components/keyPad";

export default class DrumMachine extends React.Component {
	render() {
		return (
			<div className="h-screen flex items-center justify-center text-center">
				<div
					className="bg-gradient-to-b from-gray-700 via-gray-900 to-black text-white w-[500px] flex flex-col rounded-md p-4 shadow-[10px_25px_50px_-15px_rgba(0,0,0,0.7)]"
					id="drum-machine"
				>
					<div
						className="bg-gradient-to-b from-gray-100 to-gray-300 text-[#1b1515] text-center font-semibold self-center my-4 h-10 p-2 w-[300px] rounded-md"
						id="display"
					></div>
						<KeyPad />
					<div>
						<p>Volume</p>
						<input
							type="range"
							className="h-2 w-72 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700 accent-slate-200"
						/>
					</div>
					<div className="settings-container flex justify-around">
						<div>
							<p>Power</p>
							<label className="relative inline-flex items-center cursor-pointer">
								<input type="checkbox" value="" className="sr-only peer" />
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
