import { accordionData } from "./constants";

// const wrap = document.querySelector(".questions__wrap");

// function generateHTML(accData) {
// 	const tmp = accData
// 		.map((el) => {
// 			const isActive = el.active ? "active" : "";
// 			return `
//       <li class="accordion__item ${isActive}">
//       <div class="accordion__title">
//         <span class="text">${el.title}</span>
//         <span class="close">+</span>
//         <span class="open">-</span>

//       </div>
//       <div class="accordion__content">${el.text}</div>
//     </li>
//       `;
// 		})
// 		.join("");
// 	const ul = document.createElement("ul");
// 	ul.classList.add("accordion");
// 	ul.innerHTML = tmp;
// 	return ul;
// }
// wrap.appendChild(generateHTML(accordionData));

const accardion = document.querySelectorAll(".accordion__item");
accardion.forEach((el) => el.addEventListener("click", accordionHandler));

function accordionHandler(e) {
	const title = e.target.closest(".accordion__title");
	if (title) {
		if (this.classList.contains("active")) {
			this.classList.toggle("active");
			return;
		}
		const accardion = document.querySelectorAll(".accordion__item");
		accardion.forEach((el) => el.classList.remove("active"));
		this.classList.add("active");
	}
}
