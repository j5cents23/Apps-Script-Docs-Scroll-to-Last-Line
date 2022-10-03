// creates a new function called scrollDown
function scrollDown() {
  // references the doc we're using
  var doc = DocumentApp.getActiveDocument()
  // references the body of the doc
  var body = doc.getBody();
  // creates a variable that asks the program to get the number of child elements indexed within the body. Not sure what counts as an element, but since we're just trying to get the last one it really doesn't matter.  
  var numChildren = body.getNumChildren();
  // creates a variable called position which is equal to the total number of children -1, at or after the starting index of 0. Which is the first child of the index. Imagine you are counting 58 jelly beans, you want to tell someone to look at the last jelly bean, so you say "count all the jelly beans and then -1" then you specify "The last jelly bean must be after the first". That is essentially what's going on here. New variable, position = [variable doc].[method.newPosition]([variable body].[variable numChildren]-1), but must be after 0);
  var position = doc.newPosition(body.getChild(numChildren - 1), 0);
  doc.setCursor(position);
}
