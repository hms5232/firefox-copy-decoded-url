browser.browserAction.onClicked.addListener((tab) => {
    // decodeURI(window.location.href);
    const duri = decodeURI(tab.url);
    navigator.clipboard.writeText(duri).then(() => {
        console.log(`${duri}`)
    }).catch(err => {
        console.error(err);
    })
});
