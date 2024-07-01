function updateTime() {
	const now = new Date();
	let utcHours = now.getUTCHours().toString().padStart(2, "0");
	const utcMinutes = now.getUTCMinutes().toString().padStart(2, "0");
	const utcSeconds = now.getUTCSeconds().toString().padStart(2, "0");

	const period = utcHours >= 12 ? "PM" : "AM";
	utcHours = utcHours % 12 || 12;
	// get the update time in real time
	const utcTime = `${utcHours}:${utcMinutes}:${utcSeconds}`;

	// get and update the current Day
	const currentDay = now.toLocaleString("en-US", { weekday: "long" });

	document.getElementById("utc-time").textContent = utcTime;
	document.getElementById("current-day").textContent = currentDay;
}

// update the time immediately on load
updateTime();

// update the time every 1 second
setInterval(updateTime, 1000);
