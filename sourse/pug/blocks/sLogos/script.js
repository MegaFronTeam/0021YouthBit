function getPartners() {
	
	const url = `${baseUrl}/site/case`;
	handleRequest(url).then(res => {
		// console.log(res.cases)
		const arr = res.companies;
		for (const item of arr) {
			console.log(item);
			
			document.querySelector(".sLogos__slider--partners-js .swiper-wrapper").insertAdjacentHTML("beforeend", template(item.avatar_url, item.description));
		}
	});
}

getPartners();