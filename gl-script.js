
function cloneItem() {

	var item = document.getElementsByClassName('gl-item')[0];
	var items = document.getElementsByClassName('gl-items')[0];
	var count = 100;
	while (count--) {
		var newItem = item.cloneNode(true);
		items.appendChild(newItem);
	}
}

function bindEvents() {
	var items = document.getElementsByClassName('gl-items')[0];

	document.addEventListener('click', function (evt) {
		if (evt.target.hasAttribute('data-action')) {
			var action = evt.target.getAttribute('data-action');
			var selected = document.querySelector('.gl-view-type .selected');

			if (action === 'thumb-view') {
				selected && selected.classList.remove('selected');
				items.classList.remove('gl-view-type-list');
				items.classList.add('gl-view-type-thumb');
				evt.target.classList.add('selected');
			}

			if (action === 'list-view') {
				selected && selected.classList.remove('selected');
				items.classList.add('gl-view-type-list');
				items.classList.remove('gl-view-type-thumb');
				evt.target.classList.add('selected');
			}

		}

	}, false);
}

cloneItem();
bindEvents();
