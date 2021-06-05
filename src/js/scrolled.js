const scrollButton = document.querySelector(".arrow-top");
scrollButton.addEventListener("click", scrollHandler);
function scrollHandler() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}
