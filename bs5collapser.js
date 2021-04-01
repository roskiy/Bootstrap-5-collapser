function docollapse(actor, bstarget, byname = false) {
	if (byname) {
		actor = document.getElementById(actor);
		bstarget = document.getElementById(bstarget);
	}
	actor.classList.add("collapsed");
	bstarget.classList.add("show");
}

function uncollapse(actor, bstarget, byname = false) {
	if (byname) {
		actor = document.getElementById(actor);
		bstarget = document.getElementById(bstarget);
	}
	actor.classList.remove("collapsed");
	bstarget.classList.remove("show");
}
window.onload = function exampleFunction() {
	buttonp = document.getElementsByClassName("navbar-toggler");
	l = buttonp.length;
	for (i = 0; i < l; i++) {
		var bstarget = document.getElementById(buttonp[i].dataset.bsTarget);
		var actor = buttonp[i];
		actor.addEventListener("click", function (target) {
			if (actor.classList.contains("collapsed")) {
				uncollapse(actor, bstarget)
			} else {
				docollapse(actor, bstarget)
			}
		});
	}
}
