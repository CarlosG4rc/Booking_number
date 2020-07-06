function doGet() {
    var template =  HtmlService.createTemplateFromFile('index'); // Método para la creación del  template
    return template.evaluate().addMetaTag('viewport', 'width=device-width, initial-scale=1.0'); // se evalua la metadata de la cabecera
}
function include (filename) {
    return HtmlService.createTemplateFromFile(filename).getRawContent();
}
function revisarMatricula(matricula){
    var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1OHZwZzP5F1u-AmsGKhwMCJdz-6_ETAN0iTDIjl9ApeA/edit#gid=0');
    var sheet = ss.getSheetByName('Hoja 1');
    var lastrowbd = sheet.getDataRange().getNumRows();
    var column = sheet.getDataRange();
    var value = column.getValues();
    for(var i = 0; i < lastrowbd; i++)
    {
      if(value[i][1] == matricula)
      {
        var status = "Felicidades. Eres parte de la comunidad Possenti";
        i = lastrowbd + 1;
      }
      else{
        var status = "No se encuentra la matrícula. Favor de comunicarse a la secció correspondiente"
      }
  }
    return status;
}