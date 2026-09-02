let checkbox1 = document.querySelector('.check1');
	let checkbox2 = document.querySelector('.check2');
	let checkbox3 = document.querySelector('.check3');
	let checkbox4 = document.querySelector('.check4');
	let checkbox5 = document.querySelector('.check5');
	let checkbox6 = document.querySelector('.check6');
	let checkbox7 = document.querySelector('.check7');
	
	let label1 = document.querySelector('.black1');
	let label2 = document.querySelector('.black2');
	let label3 = document.querySelector('.black3');
	let label4 = document.querySelector('.black4');
	let label5 = document.querySelector('.black5');
	let label6 = document.querySelector('.black6');
	let label7 = document.querySelector('.black7');
	
	let Button = document.querySelector('.answers');
	let sbros = document.querySelector('.sbros');
	let message = document.querySelector('.message');
	
	Button.onclick = function() {
		console.log('Нажата кнопка Проверить.');
		
							if(!checkbox1.checked && !checkbox2.checked && !checkbox3.checked && !checkbox4.checked && !checkbox5.checked && !checkbox6.checked && !checkbox7.checked) {
									message.innerText = "(!) Выберите минимум один ответ.";
									return;
																			}
							message.innerText = "";
							
							if(checkbox1.checked) {
								label1.classList.remove('black1');
								label1.classList.add('right');
								checkbox1.classList.add('disabled-checkbox');
							}
							
							if(checkbox2.checked) {
								label2.classList.remove('black2');
								label2.classList.add('wrong');
							}
							
							if(checkbox3.checked) {
								label3.classList.remove('black3');
								label3.classList.add('wrong');
							}
							
							if(checkbox4.checked) {
								label4.classList.remove('black4');
								label4.classList.add('right');
								checkbox4.classList.add('disabled-checkbox');
							}
							
							if(checkbox5.checked) {
								label5.classList.remove('black5');
								label5.classList.add('right');
								checkbox5.classList.add('disabled-checkbox');
							}
							
							if(checkbox6.checked) {
								label6.classList.remove('black6');
								label6.classList.add('right');
								checkbox6.classList.add('disabled-checkbox');
							}
							
							if(checkbox7.checked) {
								label7.classList.remove('black7');
								label7.classList.add('right');
								checkbox7.classList.add('disabled-checkbox');
							}
							
							// блокировка галочек
							
							checkbox1.disabled = true;
							checkbox2.disabled = true;
							checkbox3.disabled = true;
							checkbox4.disabled = true;
							checkbox5.disabled = true;
							checkbox6.disabled = true;
							checkbox7.disabled = true;
					};
					
	 sbros.onclick = function() {
		// сброс цвета текстовой
		label1.classList.remove('right');
		checkbox1.classList.remove('disabled-checkbox');
		label1.classList.add('black1');
		
		label2.classList.remove('wrong');
		label2.classList.add('black2');
		
		label3.classList.remove('wrong');
		label3.classList.add('black3');
		
		label4.classList.remove('right');
		checkbox4.classList.remove('disabled-checkbox');
		label4.classList.add('black4');
		
		label5.classList.remove('right');
		checkbox5.classList.remove('disabled-checkbox');
		label5.classList.add('black5');
		
		label6.classList.remove('right');
		checkbox6.classList.remove('disabled-checkbox');
		label6.classList.add('black6');
		
		label7.classList.remove('right');
		checkbox7.classList.remove('disabled-checkbox');
		label7.classList.add('black7');
		// сброс галочек
		checkbox1.checked = false;
		checkbox2.checked = false;
		checkbox3.checked = false;
		checkbox4.checked = false;
		checkbox5.checked = false;
		checkbox6.checked = false;
		checkbox7.checked = false;
		// сброс disabled блокировок
		checkbox1.disabled = false;
		checkbox2.disabled = false;
		checkbox3.disabled = false;
		checkbox4.disabled = false;
		checkbox5.disabled = false;
		checkbox6.disabled = false;
		checkbox7.disabled = false;
		
		message.innerText = "";
								};