const handleClick = tab => {
	console.log("handleClick tab.url:", tab.url)
}

browser.pageAction.onClicked.addListener(handleClick)

console.log("plugin init.")
