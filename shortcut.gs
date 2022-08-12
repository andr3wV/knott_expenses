var financesheet = SpreadsheetApp.openById("1VifcGiyDfEOGtGMgpFHC6-F-M7MKkHBTbCo5L98XrbQ").getSheetByName('Season 1 Round 1');
 
function doGet(e) {
    
  function getFirstEmptyRowByColumnArray(range) {
    var column = financesheet.getRange(range); //'A:A'
    var values = column.getValues(); // get all data in one call
    var ct = 0;
    while ( values[ct] && values[ct][0] != "" ) {
      ct++;
    }
    return (ct+1);
  }
  
  var firstEmpty = getFirstEmptyRowByColumnArray('A:A');
  var cost = JSON.parse(e.parameters.cost);
  var amount = JSON.parse(e.parameters.amount);
  var andrew = JSON.parse(e.parameters.andrew);
  var michael = JSON.parse(e.parameters.michael);
  var patrick = JSON.parse(e.parameters.patrick);
  var tony = JSON.parse(e.parameters.tony);
  var anthony = JSON.parse(e.parameters.anthony);
  var aidan = JSON.parse(e.parameters.aidan);
  var david = JSON.parse(e.parameters.david);
  var john = JSON.parse(e.parameters.john);
  var whoPaid = JSON.parse(e.parameters.whoPaid);
  if(firstEmpty>=26){

    return new Error("Over the limit. Please create new sheet"); 

    }//create new sheet and add it there

 financesheet.getRange(firstEmpty,1,1,11).setValues([[cost,+amount, andrew, michael, patrick, tony, anthony, aidan, david, john, whoPaid]]);
}