function dayComponent(day) {
	return `
    <div class="day border p-8 max-sm:p-2 max-md:p-4 max-lg:p-6">
      ${day}
    </div>
  `;
}

function monthComponent(monthName, monthShort, monthLength, startingDay, bg) {
	const emptyDays = Array.from(
		{ length: startingDay },
		(_) => '<div class="empty-day"></div>'
	).join("");
	const days = Array.from({ length: monthLength }, (_, i) =>
		dayComponent(i + 1)
	).join("");

	return `
    <section class="flex flex-col items-center min-w-[1000px] 

      border shadow-lg rounded-md p-6 month mb-8 ${monthShort} ${bg}">
      <h2 class="text-9xl -rotate-12 drop-shadow-lg 
	  text-white font-bold hover:tracking-in-expand
	  max-sm:text-[70px] max-md:text-[100px]">${monthName}</h2>
      <div class="grid grid-cols-7 gap-2 border mt-12 p-2">
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

function generateRandomColor() {
	const colors = ['bg-slate-500', 'bg-amber-500', 'bg-emerald-500', 'bg-pink-500', 'bg-rose-500', 'bg-yellow-500', 'bg-lime-500', 'bg-orange-500']
	const randomColor = colors[Math.floor(Math.random() * colors.length)]
	return randomColor
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
		const bg = generateRandomColor();

		monthsData.push({
			monthName,
			monthShort,
			monthLength,
			startingDay,
			bg
			
		});
	}

	return monthsData;
}

function clickDay() {
	const days = document.getElementsByClassName("day");
	for (let i = 0; i < days.length; i++) {
		days[i].addEventListener("click", () => {
			
			days[i].classList.toggle('bg-green-500');
		} )
	}
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
			month.startingDay,
			month.bg
		
		);
		rootElement.insertAdjacentHTML("beforeend", monthMarkup);
	});

	clickDay();
	
	
}

window.addEventListener("load", loadEvent);
