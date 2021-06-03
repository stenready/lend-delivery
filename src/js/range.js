import { rangeValues } from "./constants";

const rangeEl = document.querySelector("input[type=range]");
const outputPersons = document.getElementById("result-persons");
const plus = document.getElementById("plus-range");
const minus = document.getElementById("minus-range");

initStartValues();

plus.addEventListener("click", plusRange);
minus.addEventListener("click", minusRange);

function initStartValues() {
	rangeEl.setAttribute("max", rangeValues.maxValue);
	rangeEl.value = rangeValues.currentValue;
	outputPersons.innerHTML = `${rangeValues.currentValue} personnes`;
}
function plusRange() {
	rangeEl.value++;
	changeActionHandler();
	updateRangeEl(rangeEl);
}
function minusRange() {
	rangeEl.value--;
	changeActionHandler();
	updateRangeEl(rangeEl);
}
function setResultValue(value) {
	outputPersons.innerHTML = `${value} personnes`;
}
function changeActionHandler() {
	setResultValue(rangeEl.value);
}
function isOlderEdgeOrIE() {
	return (
		window.navigator.userAgent.indexOf("MSIE ") > -1 ||
		!!navigator.userAgent.match(/Trident.*rv\:11\./) ||
		window.navigator.userAgent.indexOf("Edge") > -1
	);
}

function valueTotalRatio(value, min, max) {
	return ((value - min) / (max - min)).toFixed(2);
}

function getLinearGradientCSS(ratio, leftColor, rightColor) {
	return [
		"-webkit-gradient(",
		"linear, ",
		"left top, ",
		"right top, ",
		"color-stop(" + ratio + ", " + leftColor + "), ",
		"color-stop(" + ratio + ", " + rightColor + ")",
		")",
	].join("");
}

function updateRangeEl(rangeEl) {
	var ratio = valueTotalRatio(rangeEl.value, rangeEl.min, rangeEl.max);

	rangeEl.style.backgroundImage = getLinearGradientCSS(
		ratio,
		rangeValues.progressColor,
		rangeValues.rangeColor
	);
}

function initRangeEl() {
	if (isOlderEdgeOrIE()) {
		rangeEl.style.height = "20px";
		rangeEl.addEventListener("input", function (e) {
			changeActionHandler();
		});
	} else {
		updateRangeEl(rangeEl);
		rangeEl.addEventListener("input", function (e) {
			updateRangeEl(e.target);
			changeActionHandler();
		});
	}
}

initRangeEl();
