console.log("✅ Zoho CRM Extractor content script running");

function extractLeads() {
  const rows = document.querySelectorAll('[role="row"]');
  const leads = [];

  rows.forEach(row => {
    const text = row.innerText.split("\n");
    if (text.length > 3) {
      leads.push({
        name: text[0] || "",
        company: text[1] || "",
        email: text.find(t => t.includes("@")) || "",
        phone: text.find(t => /\d{8,}/.test(t)) || ""
      });
    }
  });

  chrome.runtime.sendMessage({
    type: "LEADS_DATA",
    data: leads
  });

  alert(`✅ ${leads.length} leads extracted`);
}

window.addEventListener("keydown", e => {
  if (e.ctrlKey && e.key === "E") {
    extractLeads();
  }
});
