module.exports = function zeros(expression) {

     var arr = expression.split('*');

     for(var i=0; i<arr.length; i++) {
        if(arr[i].search('!!') != -1){
          arr[i] = arr[i].replace(/[^-0-9]/gim,'');
          arr[i] = alternate(arr[i]);
        } else {
          arr[i] = arr[i].replace(/[^-0-9]/gim,'');
          arr[i] = factorial(arr[i]);
        }
      }

      var mult = '1';
      for(var i=0; i<arr.length; i++){
        mult = multiply(mult,arr[i]);
      }

      return zero(mult);
 }
function sameLength(a,count) {
    a = '0'.repeat(count) + a;
    return a;
}
function multNumber(first, second) {

  var str;
  var mult = '';
  var s = [];

  for( var i = 1; i < second.length+1; i++){
      var j = 1;
      var save = 0;
      while( j < second.length+1) {
      str = Number(first.charAt(first.length-j))*Number(second.charAt(second.length-i))+save;
        if(str > 9) {
          str = String(str);
          save = Number(str.charAt(0));
          mult = str.charAt(1) + mult;
        } else {
          save = 0;
          str = String(str);
          mult = str + mult;
        }
        j++;
        if(j==second.length+1){
        mult = save + mult;
      }
      }

      s[i-1] = String(mult) + '0'.repeat(i-1) ;
      mult = '';
    }

    for(var i = s.length-1; i>0; i--){
      var zero = '0'.repeat(i);
      s[s.length - 1 - i] = zero + s[s.length - 1 - i];
    }

    return s;
}
function addition(s) {

  var str = 0;
  var result = '';
  var long = s[0].length;
  var save =0;

  for(var i=1; i<long+1; i++){

  var j = 0;

   while( j < s.length) {
      str = Number(str) + Number(s[j].charAt(long-i));
      j++;
    }
    str = str+save;
    if(str > 9) {
      str = String(str);
      save = Number((str.substring(0, str.length - 1)));
      result = str.charAt(str.length - 1) + result;
      str ="";
    }
    else {
      str = String(str);
      save = 0;
      result = str + result;
      str="";
    }
    if(i==long && save != 0){
          result = save + result;
        }

  }

 return result;
}
function multiply(first, second) {

  if(first.length < second.length) {
    first = sameLength(first, second.length - first.length);
  } else if(first.length > second.length) {
      second = sameLength(second, first.length - second.length);
  }

  var sum = multNumber(first, second);

  var result = addition(sum);

  while(result.charAt(0) == 0){
    result = result.slice(1);
  }

  return result;
}
function factorial(element) {
  var result = '1';
  for(var i=2; i<=element; ++i) {
    result = multiply(String(result),String(i));
  }
  return result;
}
function alternate(element) {
  var result = '1';
  if(element%2 == 0){
    for(var i = 2; i<=element; i=Number(i)+2) {
      result = multiply(String(result),String(i));
    }
    return result;
  } else {
    for(var i = 3; i<=element;i=Number(i)+2) {
      result = multiply(String(result),String(i));
    }
    return result;
  }
}
function zero (str) {
  var count = 0;
  for(var i = str.length-1; i>=0; i--) {
    if(str[i] == '0') {
      count++;
    } else {
      return count;
    }
  }
}
