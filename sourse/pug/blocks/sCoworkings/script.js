function getPlaygrounds() {
	const url = `${baseUrl}/site/playground`;
	handleRequest(url).then(res => {
		const arr = res;
		
		const template = function (img, title, p) {
			return `
					<div class="sCoworkings__slide swiper-slide">
						<div class="sCoworkings__item">
							<div class="sCoworkings__img-wrap"><img src="${img}" alt="" loading="lazy"/>
							</div>
							<div class="sCoworkings__title">${title}</div>
							<p>${p}</p>
						</div>
					</div>`;
		};
		
		for (const item of arr) {
			// console.log(item);

			document.querySelector(".sCoworkings__slider .swiper-wrapper").insertAdjacentHTML("beforeend", template(item.avatar_url, item.name, item.city));
		}
	});

};

getPlaygrounds();