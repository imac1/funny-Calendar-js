function dayComponent(day) {
	return `
	<div class="grid grid-cols-7 gap-4 border mt-12">
		<div class="day border p-8 ">
			${day}
		</div>
		</div>
	
		
	`
}
function monthComponent(monthName, monthShort, monthLength) {
	const monthsArray = months;
	for (let obj in monthsArray) {
		console.log(`obj ${obj}`)
	}
	for (const [key, val] of Object.entries(monthsArray)) {
		console.log(key, val['month']);
	  }
	return `
	<section class= "flex flex-col items-center min-w-[1000px] bg-gradient-to-r from-red-500 to-red-300
	 hover:bg-gradient-to-l hover:from-red-500 hover:to-red-300 transition-all ease-in-out delay-700 
	 border shadow-lg rounded-md p-6 month ${monthShort}">
		<h2 class="text-9xl -rotate-12 drop-shadow-lg text-white font-bold">${monthName}</h2>
		<div class="days">
			${dayComponent(monthLength)}
		</div>
	</section>
	`
}

function loadEvent() {

	console.log(months);

	const rootElement = document.getElementById("root");

	rootElement.insertAdjacentHTML("beforeend", monthComponent("January", "jan", 31));
	
}
window.addEventListener("load", loadEvent);