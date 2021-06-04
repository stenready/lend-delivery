const dropdown = document.querySelector(".language-dropdown");
const text = document.querySelector(".language-dropdown .text");

dropdown.addEventListener("click", toggleDropdownHandler);

document.addEventListener("click", closeDrpdown);

let dropdownIsShow = false;

function closeDrpdown(e) {
	const onDrop = e.target.closest(".language-dropdown");
	if (!onDrop && dropdownIsShow) {
		dropdown.classList.remove("show");
		dropdownIsShow = false;
	}
}
function selectDropdown(item) {
	if (item) text.textContent = item.textContent;
}

function toggleDropdownHandler(e) {
	const item = e.target.closest(".list-item");
	this.classList.toggle("show");
	dropdownIsShow = !dropdownIsShow;
	selectDropdown(item);
}
