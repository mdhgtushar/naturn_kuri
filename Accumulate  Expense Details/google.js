// ===== Serve the Web App =====
function doGet() {
  return HtmlService.createTemplateFromFile("index").evaluate();
}

// ===== Include external HTML files (like javascript.html) =====
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function processFrom(form) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Transactions");

  if (!sheet) {
    throw new Error("Sheet named 'Transactions' not found.");
  }

  const transactionId = form.transactionId;
  const date = form.date;
  const unit = form.unit;
  const registerPage = form.registerPage;

  const debCreArray = form["debCre[]"];
  const descArray = form["description[]"];
  const amountArray = form["amount[]"];

  const debCreList = Array.isArray(debCreArray) ? debCreArray : [debCreArray];
  const descList = Array.isArray(descArray) ? descArray : [descArray];
  const amountList = Array.isArray(amountArray) ? amountArray : [amountArray];

  for (let i = descList.length - 1; i >= 0; i--) {
    const row = [
      transactionId,
      date,
      unit,
      registerPage,
      debCreList[i],
      descList[i],
      amountList[i]
    ];

    // Insert a new row at position 2 (below header)
    sheet.insertRowAfter(1);
    sheet.getRange(2, 1, 1, row.length).setValues([row]);
  }
}


function getDescriptions() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Description List");
  if (!sheet) return [];

  const values = sheet.getRange("A1:A" + sheet.getLastRow()).getValues();  
  return values.flat().filter(item => item);  
}


