const $ = x => document.querySelector(x);
const $d2k = $("form input[name=\"hasDirectToKindle\"]");

const setStorageWithKey = (k, f) => e => browser.storage.local.set({[k]: f(e)})
	.catch(console.warn);

const restoreOptions = () => {
	browser.storage.local.get(null)
		.then(obj => Object.assign({
			hasDirectToKindle: true,
		}, obj))
		.then(({
			hasDirectToKindle,
		}) => {
			$d2k.checked = hasDirectToKindle === true;
		})
		.catch(err => {
			console.warn("ERROR", err);
		});
};

document.addEventListener("DOMContentLoaded", restoreOptions);
$d2k.addEventListener("change", setStorageWithKey("hasDirectToKindle", e => e.target.checked));
