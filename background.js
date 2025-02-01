chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url && tab.url.includes("instagram.com")) {
      chrome.sidePanel.setOptions({
        tabId: tabId,
        path: "sidepanel.html",
        enabled: true
      });
    } else {
      chrome.sidePanel.setOptions({
        tabId: tabId,
        enabled: false
      });
    }
  });
  