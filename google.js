function doGet() {
  return HtmlService.createTemplateFromFile("index").evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
 
function processFrom(form) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('trans_data');

  const descriptions = form["description[]"];
  const amounts = form["amount[]"];
  const descriptionArray = Array.isArray(descriptions) ? descriptions : [descriptions];
  const amountArray = Array.isArray(amounts) ? amounts : [amounts];

  // Loop through and insert rows at position 2 (top, after header)
  for (let i = descriptionArray.length - 1; i >= 0; i--) {
    sheet.insertRowAfter(1); // Insert a new row after the header (assuming header is row 1)

    sheet.getRange(2, 1, 1, 12).setValues([[
      form.transactionId,
      form.date,
      form.studentId,
      form.pageNo,
      form.studentName,
      form.unit,
      form.class,
      form.classRoll,
      form.externalNo,
      form.registerPage,
      descriptionArray[i],
      amountArray[i]
    ]]);
  }

  return "Success";
}


function getStudentInfo(studentId) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('students'); // Sheet name where student data is
  const data = sheet.getDataRange().getValues(); // Get all rows

  // Assume headers in row 1: ID, Name, Unit, Class, Class Roll, External No, Register Page
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] == studentId) {
      return {
        pageNo: data[i][2],
        name: data[i][1],
        unit: data[i][3],
        class: data[i][4],
        classRoll: data[i][5],
        externalNo: data[i][6],
        registerPage: data[i][7]
      };
    }
  }

  return { error: "Student not found" };
}




function getDescriptions() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("description_list");
  const values = sheet.getRange(1, 1, sheet.getLastRow()).getValues(); // Read from column A
  return values.flat().filter(String); // Flatten and remove empty strings
}







