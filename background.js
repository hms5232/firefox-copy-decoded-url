browser.browserAction.onClicked.addListener((tab) => {
    // const duri = decodeURI(window.location.href);
    const duri = decodeURI(tab.url);
    navigator.clipboard.writeText(duri)
        .then(() => {
        console.log(`Decoded URL ${duri} copied to clipboard...`)
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
});
