function getFAQ() {
	const url = `${baseUrl}/site/faq`;
	handleRequest(url).then(res => {
		// console.log(res);
		const arr = res;
		for (const item of arr) {
			let h3 = document.createElement("h3");
			h3.innerHTML = item.name;
			let ddGroup = document.createElement("div");
			ddGroup.classList.add("dd-group");
			ddGroup.classList.add("dd-group-js");
			ddGroup.appendChild(h3);
			for (const subitem of item.articles) {
				
				
				const head = document.createElement("div");
				head.classList.add("dd-group__head");
				head.classList.add("dd-head-js");
				head.innerHTML = subitem.question + '<span></span>';
				
				const body = document.createElement("div");
				body.classList.add("dd-group__content");
				body.classList.add("dd-content-js");
				body.innerHTML = subitem.answer;

				const item = document.createElement("div");
				item.classList.add("dd-group__item");

				item.appendChild(head);
				item.appendChild(body);

				ddGroup.appendChild(item);
			}
			document.querySelector(".sFAQ .container").appendChild(ddGroup);
			
		}
	});
}

getFAQ();
