function dayComponent(day) {
	return `
    <div class="day border p-8">
      ${day}
    </div>
  `;
}

function monthComponent(monthName, monthShort, monthLength, startingDay) {
	const emptyDays = Array.from(
		{ length: startingDay },
		(_) => '<div class="empty-day"></div>'
	).join("");
	const days = Array.from({ length: monthLength }, (_, i) =>
		dayComponent(i + 1)
	).join("");

	return `
    <section class="flex flex-col items-center min-w-[1000px] bg-gradient-to-r from-red-500 to-red-300
      hover:bg-gradient-to-l hover:from-red-500 hover:to-red-300 transition-all ease-in-out delay-700
      border shadow-lg rounded-md p-6 month ${monthShort}">
      <h2 class="text-9xl -rotate-12 drop-shadow-lg text-white font-bold">${monthName}</h2>
      <div class="grid grid-cols-7 gap-4 border mt-12">
        <div class="empty-day"></div>
        <div class="empty-day"></div>
        <div class="empty-day"></div>
        <div class="empty-day"></div>
        <div class="empty-day"></div>
        <div class="empty-day"></div>
        <div class="empty-day"></div>
        ${emptyDays}
        ${days}
      </div>
    </section>
  `;
}

function getMonthData(year) {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();

	if (year !== currentYear) {
		console.error("Invalid year");
		return;
	}

	const monthsData = [];
	for (let month = 0; month < 12; month++) {
		const monthName = new Date(year, month).toLocaleString("default", {
			month: "long",
		});
		const monthShort = new Date(year, month).toLocaleString("default", {
			month: "short",
		});
		const monthLength = new Date(year, month + 1, 0).getDate();
		const startingDay = new Date(year, month, 1).getDay(); // Get the starting day of the month (0 - Sunday, 6 - Saturday)

		monthsData.push({
			monthName,
			monthShort,
			monthLength,
			startingDay,
		});
	}

	return monthsData;
}

function clickDay() {
	const days = document.getElementsByClassName("day");
	days[0].addEventListener("click", () => {
			days[0].classList.toggle('bg-green-300')
		} )
	
}

function loadEvent() {
	const rootElement = document.getElementById("root");
	const currentYear = new Date().getFullYear();
	const monthsData = getMonthData(currentYear);

	monthsData.forEach((month) => {
		const monthMarkup = monthComponent(
			month.monthName,
			month.monthShort,
			month.monthLength,
			month.startingDay
		);
		rootElement.insertAdjacentHTML("beforeend", monthMarkup);
	});

	clickDay();
}

window.addEventListener("load", loadEvent);
