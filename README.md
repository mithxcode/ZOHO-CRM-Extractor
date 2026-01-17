Zoho CRM Data Extractor – Chrome Extension
Overview

Zoho CRM Data Extractor is a Chrome Extension built using Manifest V3
that demonstrates extraction of CRM module data (Leads, Contacts, Accounts, Deals, Tasks), local persistence, and visualization in a popup dashboard.

The project focuses on Chrome Extension architecture, data flow, storage design, and UI interaction, as required in a technical assessment.

It is designed to be modular, maintainable, and easily extensible, allowing future integration with live Zoho CRM pages.

Key Features

Module-based extraction (Leads, Contacts, Accounts, Deals, Tasks)

Popup dashboard with module selection and modern professional UI

Local persistence using chrome.storage.local

Export extracted data as CSV for reporting or testing

Delete module-specific data or clear all data

Timestamped extraction records to track when data was generated

Scrollable JSON output for easy inspection

Responsive UI with styled buttons and hover effects

Supports mock/dummy data for safe assessment without live data

Tech Stack

Chrome Extension (Manifest V3)

JavaScript (Vanilla / React.js optional for popup)

Tailwind CSS for styling (optional, extendable)

Chrome APIs:

chrome.runtime → Message passing

chrome.tabs → Interact with active tab

chrome.storage → Local data persistence

Content Scripts + Service Worker for modular architecture

Extraction Strategy

To demonstrate the complete end-to-end workflow (extraction → storage → UI → export), a mock data provider is used.

The architecture is designed to support DOM-based extraction from Zoho CRM pages.
The mock layer can be replaced with live DOM selectors for each module without changing the overall system design.

This approach allows clear validation of:

Message passing between popup → content script → background

Module-based storage schema

UI behavior with real-time JSON output

CSV export functionality

Delete / Clear module-specific or all data

Storage Schema

All data is stored in chrome.storage.local using a module-based structure:

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

Each module key stores an array of records (dummy or extracted).

lastSync is a timestamp of the last extraction for reference.

Deleting a module only removes that module's array, leaving others intact.

Extension Architecture

Popup (UI Layer)

Module selection dropdown

Buttons: Extract, Delete Module, Clear All, Export CSV

Output area shows JSON data

Content Scripts (Extraction Layer)

Generates dummy data for each module

Can be extended to read DOM elements for live Zoho CRM data

Sends extracted data back to popup via chrome.runtime.sendMessage

Storage Layer

chrome.storage.local stores all data

Supports delete module and clear all operations

Export Layer

Exports data from all modules into CSV

Automatically concatenates all records into a single CSV

Future Enhancements (Assessment Points)

Live DOM scraping for real Zoho CRM data

Shadow DOM handling for advanced pages

Pagination handling for extracting large datasets

Filtering (e.g., stage, date range, owner) before export

Improved UI/UX using React + Tailwind components

Background syncing to periodically fetch updates

Installation

Clone or download this repository.

Open Chrome → chrome://extensions/

Enable Developer mode.

Click Load unpacked and select the extension folder.

The extension will appear in the Chrome toolbar.

Usage

Click the extension icon in Chrome toolbar.

Select the module (Leads, Contacts, Deals, Accounts, Tasks).

Click Extract Data → JSON appears in popup.

Click Delete Module Data → Removes selected module data.

Click Clear All Data → Deletes all stored records.

Click Export CSV → Downloads CSV of all module data.
