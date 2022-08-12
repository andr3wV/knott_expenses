//sorts a dictionary high to low
function sort_dict(obj) {
    items = Object.keys(obj).map(function(key) {
        return [key, obj[key]];
    });
    items.sort(function(first, second) {
        return second[1] - first[1];
    });
    sorted_obj={}
    items.forEach(function(v) {
        use_key = v[0]
        use_value = v[1]
        sorted_obj[use_key] = use_value
    })
    return(sorted_obj)
}
//--------------------------------------------------------------------------//
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
//--------------------------------------------------------------------------//
//numbers: the array of values wanted to split
//names: the array of names 
function compute(numbers, names) {
  var list = names; 
  var order = numbers;
  var printer = [] 
    
  //creates dict and sorts it high to low 
  var dict = order.reduce(function(result, field, index) {
    result[list[index]] = field;
      return result;
    },{})
    dict = sort_dict(dict)

  for(i=0; i<list.length-1;i++){  
    var firstNum = Object.values(dict)[0];
    var firstName = Object.keys(dict)[0];
    var lastName = Object.keys(dict)[Object.keys(dict).length-1]
    var lastNum = Object.values(dict)[Object.keys(dict).length-1]
    
    //handles mathematics
    if(Math.abs(firstNum)>Math.abs(lastNum)){
            //handles subtraction and states it
            dict[firstName] += dict[lastName];
            printer.push(lastName + " pays " + firstName + " $" + Math.abs(lastNum));
            
        //sorts dict - gets rid of last value + reorders it
        delete dict[lastName];
        dict = sort_dict(dict);
      }
      else{   
        
      //handles subtraction and states it
        dict[lastName] += dict[firstName];
        printer.push(lastName + " pays " + firstName + " $" + firstNum)
         
      //sorts dict - gets rid of first value + reorders it
        delete dict[firstName]
        dict = sort_dict(dict)
    }
  }
return printer;
}
//--------------------------------------------------------------------------//
