// const baseUrl = 'https://lk.hack.its.xyz/api/v1' // for test purposes
const baseUrl = 'https://lk.youthbit.ru/api/v1'

function handleRequest(url) {
	const options = {
		method: 'GET',
		'Content-Type': 'application/json'
	};

	return fetch(url, options)
		.then(res => {
			// console.log(res.status);
			if (res.status !== 200) {
				throw new Error('API Error');
			}
			return res;
		})
		.then(succeedRes => succeedRes.json())
		.catch(error => {
			console.log(error);
		});
}

const template = function (img, title, a) {
	if(a) {
		return `<a href="${a}" class="sLogos__slide swiper-slide">
							<div class="sLogos__item">
								<div class="sLogos__img-wrap"> 
									<div class="img-wrap-center"><img src="${img}" alt="" loading="lazy"/></div>
								</div>
								<div class="sLogos__title">${title}</div>
							</div>
						</a>`;
	}
	else{

		return `<div class="sLogos__slide swiper-slide">
							<div class="sLogos__item">
								<div class="sLogos__img-wrap"> 
									<div class="img-wrap-center"><img src="${img}" alt="" loading="lazy"/></div>
									</div>
								<div class="sLogos__title">${title}</div>
							</div>
						</div>`;
	}
}
