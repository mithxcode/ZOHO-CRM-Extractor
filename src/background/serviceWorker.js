chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.type === "LEADS_DATA") {
    chrome.storage.local.set({ leads: msg.data });
    console.log("✅ Leads stored:", msg.data);
  }
});
