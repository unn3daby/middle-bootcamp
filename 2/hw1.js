class DateProcessor {
  WEEKEND_DAYS = [0, 6]

	constructor(date) {
		this.date = new Date(date);
	}

	static getDateArray(date) {
	    const day = date.getDate().toString().padStart(2, "0");
	    const month = (date.getMonth() + 1).toString().padStart(2, "0");
	    const year = date.getFullYear();

	  return [day, month, year]
	}

	static offsetDate(date, offset, extraOffset) {
	  const offsetMs = (offset + extraOffset) * 60 * 60 * 1000
	  return new Date(date.getTime() + offsetMs);
	}

	static getDateWithTime(date) {
	  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
	}

	static formatDate(date, format) {
	  switch(format) {
		case 'ISO':
		  return date.toISOString();
		case 'UTC':
		  return date.toUTCString();
		case 'LOCAL':
		  return date.toLocaleString();
		default:
		  return date.toString();
		}
	}

	processDateComplex(
		inputDate,
		includeTime = false,
		extraOffset = 0,
		config = {}
	) {
		const date = new Date(inputDate);
		if (isNaN(date)) {
			throw new Error("Invalid date");
		}

		const offset = config.offsetHours || 0;
		const format = config.format || "ISO";

		const resultDate = DateProcessor.offsetDate(date, offset, extraOffset);

		if (includeTime) {
			return DateProcessor.getDateWithTime(resultDate);
		}

		return DateProcessor.formatDate(resultDate, format)
	}

	formatDateShort() {
		return DateProcessor.getDateArray(this.date).join('/');
	}

	formatDateLong() {
		return DateProcessor.getDateArray(this.date).join(' - ');
	}

	capitalizeDateString(str) {
		if (typeof str !== "string") return "";
		return str
			.split(" ")
			.map((word) => word.at(0).toUpperCase() + word.slice(1).toLowerCase())
			.join(" ");
	}

	isWeekend() {
		const day = this.date.getDay();
		return WEEKEND_DAYS.includes(day);
	}
}
