function getPartners() {
	
	const url = `${baseUrl}/site/company`
	handleRequest(url).then(res => {
		const arr = res.filter(el => el.category ==='Партнёры');
		for (const item of arr) {
			// console.log(item);
			
			document.querySelector(".sLogos__slider--partners-js .swiper-wrapper").insertAdjacentHTML("beforeend", template(item.avatar_url, item.description, item.link));
		}
	});
}

getPartners();

function getGeneralPartners() {
	
	const url = `${baseUrl}/site/company`;
	handleRequest(url).then(res => {
		const arr = res.filter(el => el.category ===
			'Генеральные партнёры');
		for (const item of arr) { 
			document.querySelector(".sLogos__slider--general-partners-js .swiper-wrapper").insertAdjacentHTML("beforeend", template(item.avatar_url, item.description, item.link));
		}
	});
}

getGeneralPartners();

function getStrategicPartners() {
	
	const url = `${baseUrl}/site/company`;
	handleRequest(url).then(res => {
		const arr = res.filter(el => el.category ===
			'Специальные партнёры');
		for (const item of arr) { 
			document.querySelector(".sLogos__slider--strategic-partners-js .swiper-wrapper").insertAdjacentHTML("beforeend", template(item.avatar_url, item.description, item.link));
		}
	});
}

getStrategicPartners();

function getOrgs() {
	
	const url = `${baseUrl}/site/company`;
	handleRequest(url).then(res => {
		const arr = res.filter(el => el.category ===
			'Организатор и оператор конкурса');
		for (const item of arr) { 
			document.querySelector(".sLogos__slider--org-js .swiper-wrapper").insertAdjacentHTML("beforeend", template(item.avatar_url, item.description, item.link));
		}
	});
}

getOrgs();
