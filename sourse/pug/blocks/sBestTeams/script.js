function getWinners(caseName) { // 'onboarding', 'tourism', 'dashboard', 'assistant'
	const caseMap = {
		onboarding: 163,
		dashboard: 166,
		tourism: 170,
		assistant: 167,
	}
	const url = `${baseUrl}/site/shortlist/${caseMap[caseName]}`;
	handleRequest(url).then(res => {
		// const arr = res.staff.sort((a, b) => a.priority >= b.priority ? -1 : 1);
		const arr = res;
		
		
		const teamItem = (i, name, attendees, teaser, presentation_url, solution_url) =>{
			const classI = i;
			let classN;
			let grekText;
	
			switch (classI ) {
				case 0:
					classN = 'best-item--first';
					grekText = 'I';
					break;
					
				case 1:
					classN = 'best-item--second';
					grekText = 'II';
					break;
					
				case 2:
					classN = 'best-item--third';
					grekText = 'III';
					break;

				case 3:
					grekText = 'IV';
					classN = 'best-item--light';
					break;

				case 4:
					grekText = 'V';
					classN = 'best-item--light';
					break;

				case 5:
					grekText = 'VI';
					classN = 'best-item--light';
					break;
					
				default:
					classN = 'best-item--light';
			};

			const timeItems = (attendees) => {
				let line='';
				for (const attende of attendees) {
					line += `<li><span>${attende.surname} ${attende.name}</span><small>${attende.region_iso_code}</small></li>`
				}
				return line;
			};
			const gitBtn = (solution_url) => {
				if (!solution_url) return '';
				return `
					<div class="col-12 col-md-auto">
						<a class="winner__btn btn btn-outline-primary" href="${solution_url}">
							<svg class="icon icon-repository ">
								<use xlink:href="img/svg/sprite.svg#repository"></use>
							</svg>Ссылка на репозиторий
						</a>
					</div>
				`
 			};
			return `
				<div class="col-12 col-lg-4">
					<div class="best-item ${classN}">
						<div class="best-item__head">
							<div class="best-item__place"><span>${grekText}</span><small>место</small>
							</div>
							<div class="best-item__team"><small>Команда</small>
								<h5>${name}</h5>
							</div>
						</div>
						<ul> ${timeItems(attendees)} </ul>
						<a class="best-item__more" href="#" data-src="modal-win${i}${caseName}" data-fancybox="modal">Подробнее</a>
					</div>
					<div id="modal-win${i}${caseName}" style="display: none">
						<div class="modal-win">
							<div class="winner">
								<div class="winner__row row">
									<div class="col">
										<div class="winner__content">${teaser}</div>
									</div>
									<div class="winner__col col-xl-auto  ">
										<div class="best-item">
											<ul>${timeItems(attendees)}</ul>
										</div>
									</div>
									<div class="col-12 order-xl-5">
										<div class="winner__btn-wrap">
											<div class="row">
												<div class="col-12 col-md-auto">
													<a class="winner__btn btn btn-outline-primary" href="${presentation_url}" target="_blank">
														<svg class="icon icon-presentation ">
															<use xlink:href="img/svg/sprite.svg#presentation"></use>
														</svg>Скачать презентацию решения
													</a>
												</div>
												${gitBtn(solution_url)}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			`
		};
		let i = 0;
		for (const item of arr) {  
			let place = i < 3 ? `.first ` : ` .other`;

			console.log(item.solution_url);
			document.querySelector(`#${caseName} ${place}`).insertAdjacentHTML("beforeend", teamItem(i, item.name, item.attendees, item.teaser, item.presentation_url, item.solution_url));

			i++;
		}
	});
}
getWinners('onboarding');
getWinners('tourism');
getWinners('dashboard');
getWinners('assistant');
