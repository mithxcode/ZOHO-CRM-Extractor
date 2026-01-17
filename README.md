# Zoho CRM Data Extractor – Chrome Extension

## Overview
Zoho CRM Data Extractor is a Chrome Extension built using **Manifest V3**.  
It demonstrates extraction of CRM module data (**Leads, Contacts, Accounts, Deals, Tasks**), local persistence, and visualization in a **professional popup dashboard**.


## Key Features

- **Module-based extraction:** Supports Leads, Contacts, Accounts, Deals, Tasks  
- **Popup dashboard:** Professional UI with module selection dropdown  
- **Local persistence:** Uses `chrome.storage.local` for storing data  
- **Export data:** All extracted data can be exported as CSV  
- **Delete functionality:** Delete module-specific data or clear all data  
- **Timestamped records:** Every extraction is timestamped  
- **Scrollable JSON output:** Allows viewing of extracted data  
- **Dummy/mock data support:** Safe testing without live CRM  

---

## Tech Stack

- **Chrome Extension (Manifest V3)**  
- **JavaScript / React.js (optional)**  
- **Tailwind CSS (for professional UI)**  
- **Chrome APIs:**
  - `chrome.runtime` → message passing
  - `chrome.tabs` → interact with active tab
  - `chrome.storage` → local storage
- **Content Scripts + Service Worker**  

---

## Extraction Strategy

- Uses a **mock data provider** to simulate Zoho CRM modules  
- Designed to support **DOM-based extraction** in future  
- Validates:
  - **Message passing** between popup → content script → background
  - **Module-based storage schema**
  - **UI behavior** with live JSON output
  - **Export CSV functionality**
  - **Delete / Clear module-specific data**

---

## Extension Architecture

### 1. Popup (UI Layer)
- Provides a **professional popup interface** for the user.
- Features:
  - **Module selection dropdown** (Leads, Contacts, Accounts, Deals, Tasks)
  - **Buttons:**
    - Extract Data
    - Delete Module Data
    - Clear All Data
    - Export CSV
  - **Scrollable JSON output area** to view extracted data.
- Ensures **real-time interaction** with content scripts and storage.

### 2. Content Scripts (Extraction Layer)
- Responsible for **data extraction per module**.
- Currently uses **mock/dummy data** for safe testing.
- Can be extended to **read live Zoho CRM DOM elements**.
- Handles **message passing** to popup using `chrome.runtime.sendMessage`.
- Modular design allows **easy addition of new modules** in future.

### 3. Storage Layer
- Uses `chrome.storage.local` for **module-based storage**.
- Structure:
  - `zoho_data` object with keys for each module.
  - `lastSync` timestamp to track last extraction.
- Supports operations:
  - **Delete Module Data** → Removes data for a selected module only.
  - **Clear All Data** → Removes all module data.
- Ensures **persistent storage** between Chrome sessions.

### 4. Export Layer
- Combines all module data into a **single CSV file**.
- Exports data with:
  - Column headers corresponding to record fields.
  - Each record per line in CSV.
- Automatically opens CSV in a new tab for download.

---

## Usage Instructions

1. **Install Extension**
   - Open Chrome → `chrome://extensions/`
   - Enable **Developer Mode**
   - Click **Load unpacked** → Select extension folder.

2. **Using the Popup**
   - **Select Module**: Leads / Contacts / Deals / Accounts / Tasks
   - **Extract Data**: Generates JSON for selected module
   - **Delete Module Data**: Deletes only the selected module’s data
   - **Clear All Data**: Deletes all stored data
   - **Export CSV**: Downloads CSV of all module data

3. **Viewing Output**
   - Extracted JSON appears in a **scrollable popup area**.
   - Output updates **in real-time** with each extraction or deletion.

---
