package util

type Day int8

const (
	Monday Day = iota
	Tuesday
	Wednesday
	Thursday
	Friday
	Saturday
	Sunday
)

type Month int8

const (
	January   Month = 1
	Febuary   Month = 2
	March     Month = 3
	April     Month = 4
	May       Month = 5
	June      Month = 6
	July      Month = 7
	August    Month = 8
	September Month = 9
	October   Month = 10
	November  Month = 11
	December  Month = 12
)

func (m Month) String() string {
	var result string
	switch m {
		case January:
			result = "January"
		case Febuary:
			result = "Febuary"
		case March:
			result = "March"
		case April:
			result = "April"
		case May:
			result = "May"
		case June:
			result = "June"
		case July:
			result = "July"
		case August:
			result = "August"
		case September:
			result = "September"
		case October:
			result = "October"
		case November:
			result = "November"
		case December:
			result = "December"
		default:
			result = "Unknown"
	}

	return result
}
