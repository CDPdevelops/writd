function getSelectValue(formname,selectname){
 var theMenu = document[formname][selectname];
 var selecteditem = theMenu.selectedIndex;
 return theMenu.options[selecteditem].value;
}