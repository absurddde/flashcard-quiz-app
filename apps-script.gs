/**
 * Kelime Tekrar — Apps Script
 * Bu kodu Google Sheets'te Uzantılar → Apps Script içine yapıştırın.
 * Kaydedin → Dağıt → Yeni dağıtım → Web uygulaması → Erişim: Herkes → Dağıt
 */

function doGet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();

  // İlk satırı başlık olarak bul (boş olmayan ilk satır)
  let headerRow = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].some(cell => String(cell).trim() !== '')) {
      headerRow = i;
      break;
    }
  }

  const headers = data[headerRow];
  const rows = data.slice(headerRow + 1).filter(r =>
    r.some(cell => String(cell).trim() !== '')
  );

  const result = rows.map(row => {
    const obj = {};
    headers.forEach((h, i) => {
      obj[String(h).trim()] = row[i];
    });
    return obj;
  });

  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}
