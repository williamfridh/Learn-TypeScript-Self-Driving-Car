/**
 * Generate random obstacles.
 * 
 * @returns - An object with one obstacle for the car to handle.
 */
export function getObstacleEvents() {

	let events = { 
		'ObstacleLeft': false, 
		'ObstacleRight': false,
		'Uphill': false,
		'Downhill': false 
	};

	const randomIndex = Math.floor(Math.random() * 4);
	Object.keys(events).forEach((eventKey, eventIndex: number) => {
		if (eventIndex === randomIndex) {
			events[eventKey] = true;
		}
	});

	return events;
	
}

