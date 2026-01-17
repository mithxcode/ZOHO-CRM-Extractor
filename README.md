# Zoho CRM Data Extractor – Chrome Extension

## Overview
Zoho CRM Data Extractor is a Chrome Extension built using **Manifest V3**.  
It demonstrates extraction of CRM module data (**Leads, Contacts, Accounts, Deals, Tasks**), local persistence, and visualization in a **professional popup dashboard**.

**Purpose for Assessment:**
- Show understanding of **Chrome Extension architecture**
- Demonstrate **data flow, storage design, and UI interaction**
- Maintain **modular and extendable code structure**

---

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

## Storage Schema

All data is stored in `chrome.storage.local` with module-based structure:

```json
{
  "zoho_data": {
    "leads": [],
    "contacts": [],
    "accounts": [],
    "deals": [],
    "tasks": [],
    "lastSync": 0
  }
}
Notes:

Each module stores an array of records

lastSync tracks the last extraction timestamp

Deleting a module removes only that module's data

Extension Architecture
Popup (UI Layer)

Module selection dropdown

Buttons: Extract, Delete Module, Clear All, Export CSV

Output area displays JSON

Content Scripts (Extraction Layer)

Generates dummy data per module

Can be extended to scrape live Zoho CRM DOM

Sends extracted data back via chrome.runtime.sendMessage

Storage Layer

Data stored in chrome.storage.local

Supports delete module and clear all operations

Export Layer

Combines all module data into a single CSV

Downloads automatically

Usage Instructions
Install extension via chrome://extensions/ → Load unpacked

Click the extension icon in the Chrome toolbar

Select Module: Leads / Contacts / Deals / Accounts / Tasks

Extract Data: Generates and displays JSON in popup

Delete Module Data: Deletes selected module instantly

Clear All Data: Deletes all stored data

Export CSV: Downloads all module data as CSV

Assessment Highlights
Demonstrates Chrome Extension messaging and storage design

Shows ability to generate, manipulate, and export structured data

Modular, maintainable, and ready for live CRM integration

Professional, user-friendly popup interface for assessment/demo

Future Enhancements
Live DOM scraping for real Zoho CRM data

Shadow DOM handling for advanced pages

Pagination support for large datasets

Filtering by stage, date, or owner

Improved UI/UX with React components

Background sync for automatic updates

