function getStaff(roleName) {
	const url = `${baseUrl}/site/staff?event=153&role=${roleName}`;
	handleRequest(url).then(res => {
		const arr = res.staff.sort((a, b) => a.priority >= b.priority ? -1 : 1);

			const template = (img, name, text)=> {
					return `
						<div class="sPersons__slide swiper-slide">
							<div class="sPersons__item">
								<div class="sPersons__img-wrap"><img src="${img}" alt="" loading="lazy"/>
								</div>
								<div class="sPersons__name">${name}</div>
								<div class="sPersons__text">${text}</div>
							</div>
						</div>
					`
			};
			for (const item of arr) {
				// console.log(item); 
				document.querySelector(`#${roleName} .swiper-wrapper`).insertAdjacentHTML("beforeend", template(item.avatar_url, item.surname + " " + item.name, item.bio));
			}
		});
	}
getStaff('expert');
getStaff('tracker');
getStaff('jury');