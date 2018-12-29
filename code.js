const handleClick = () => {
	console.log("handleClick")
}

browser.browserAction.onClicked.addListener(handleClick)

console.log("plugin init.")
