browser.storage.local.get(null).then(options => {
	console.log(options)

	if (options.d2k === false) {
		document.querySelector("d2k").style.display = "none";
	}
});

let isManuallyClosed = false;

const send = () => {
	console.log("sending item to instapaper");
	//TODO
}

const d2kClicked = () => {
	isManuallyClosed = true;
	window.close();
}

const okClicked = () => {
	isManuallyClosed = true;
	send();
	window.close();
}

const cancelClicked = () => {
	isManuallyClosed = true;
	window.close();
}

document.querySelector("#ok").addEventListener("click", okClicked);
document.querySelector("#cancel").addEventListener("click", cancelClicked);
document.querySelector("#direct-to-kindle").addEventListener("click", d2kClicked);

window.addEventListener("close", () => {
	if (!isManuallyClosed) {
		console.log("not manually closed");
	}

	send();
});
