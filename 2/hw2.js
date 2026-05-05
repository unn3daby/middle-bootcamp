/*
  1) openPopup и  closePopup не соответсвуют функционалу, я бы назвал функции activatePopupTrigger и makePopupClosable.
  2) popup?.classList.remove(activeClass); - в hidePopup, а popup?.classList.add(activeClass) - в show (если чуть пренебречь YAGNI, тк в одном месте используем).
  3) Tсть два одинаковых листенера на триггеры, если вызывать сначала makePopupClosable потом activatePopupTrigger,
  то попап не будет прятаться (не уверен), соответсвенно, как по мне, лучше проверять состояние попапа и удалять/добавлять нужный класс в зависмости от состояния.
  Лушче сделать одну функцию toggle, но если нужно именно разделить логику, то придется делать проверки внутри листенеров
*/

const openPopup = (trigger, popupSelector, activeClass) => {
	const popup = document.querySelector(popupSelector);
	trigger.addEventListener("click", () => {
		popup?.classList.add(activeClass);
	});
};

const closePopup = (trigger, popupSelector, activeClass) => {
	const popup = document.querySelector(popupSelector);
	trigger.addEventListener("click", () => {
		popup?.classList.remove(activeClass);
	});

	document.addEventListener("keydown", (e) => {
    const key = e.key;

		if (key === "Escape") {
			popup?.classList.remove(activeClass);
    }
	});

  document.addEventListener("click", (e) => {
    // Если надо закрывать попап при клике внешние элементы, то e.target !== popup
		if (e.target === popup) {
			popup?.classList.remove(activeClass);
    }
		// я бы написал так:
    // if (e.target !== popup ) return;
		// popup?.classList.remove(activeClass);
	});
};
