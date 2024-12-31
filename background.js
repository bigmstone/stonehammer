chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url.includes('linkedin.com')) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['linkedin.js']
    });
  }
});
