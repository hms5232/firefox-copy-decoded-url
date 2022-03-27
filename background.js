const DFEAULT_ICON = 'icons/btn-96.png';
const OK_ICON = 'icons/copy-ok-100.png';
const ERROR_ICON = 'icons/copy-error-100.png';

browser.browserAction.onClicked.addListener((tab) => {
    // decodeURI(window.location.href);
    const duri = decodeURI(tab.url);
    navigator.clipboard.writeText(duri).then(() => {
        console.log(`${duri}`);
        showStatusByIcon(true);
    }).catch(err => {
        console.error(err);
        showStatusByIcon(false);
    })
});

function showStatusByIcon(status){
    browser.browserAction.setIcon({path: status ? OK_ICON : ERROR_ICON});
    setTimeout(browser.browserAction.setIcon({path: DFEAULT_ICON}), 3000);
}
