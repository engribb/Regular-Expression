// Form blur Event listeners
document.getElementById('name').addEventListener('blur',validateName);
document.getElementById('zip').addEventListener('blur',validateZip);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('phone').addEventListener('blur',validatePhone);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-z]{2,10}$/;

  if(!re.test(name.value)){
   name.classList.add('is-invalid');
  } else {
  name.classList.remove('is-invalid');
  }
}
function validateZip() {
  const Zip = document.getElementById('zip');
  const re = /^[0-9]{5}(-[0-9]{4})?$/;

  if(!re.test(Zip.value)){
   Zip.classList.add('is-invalid');
  } else {
  Zip.classList.remove('is-invalid');
  }
}
function validateEmail() {
  const Email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(Email.value)){
   Email.classList.add('is-invalid');
  } else {
  Email.classList.remove('is-invalid');
  }
}
function validatePhone() {
  const Phone = document.getElementById('phone');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if(!re.test(Phone.value)){
   Phone.classList.add('is-invalid');
  } else {
  Phone.classList.remove('is-invalid');
  }
}



















// let re;
// // literal characters
// re = /hello/;
// re = /hello/i;

// // metacharacter symbols
//  re = /^h/i;    // must start with
//  re = /d$/i;    // must ends with
//  re = /^hello$/i;    // must Begin and ends with
//  re = /h.llo/i;    // Matches any ONE character
//  re = /h*llo/i;    // Matches anu character 0 or more times
 
//  re = /gre?a?y/i; // OPtional character
//  re = /gre?a?y\?/i; // Escaping character

// //  Bracket [] - chracter sets
// re = /gr[ae]y/i;     // must be an a or e
// re = /[GF]ray/;     // must be a G or F
// re = /^[^GF]ray/i;     // matches anything except a G or F, outside 
// //  must start with G or F 
// re = /[A-Z]ray/i;   // match any uppercase letter
// re = /[a-z]ray/i;   // match any lowercase letter
// re = /[A-Za-z]ray/i;   // match any letter
// re = /[0-9]ray/i;   // match any digit

// // Braces {} - Quantifiers
// re = /Hel{2}o/i;   // must occur exact {m} amount of times
// re = /Hel{2,4}o/i;   // must occur exact {m} amount of times
// re = /Hel{2,}o/i;   // must occur at least {m} amount of times

// // parentheses () - Grouping
// re = /^([0-9]x){3}$/

// // Shorthand character classes
//  re = /\w/;  // word character - aplhanumeric or _
//  re = /\w+/;  // + = one or more 
//  re = /\W/;  // non- word character
//  re = /\d/;  // match any digit
//  re = /\d+/;  // match any digit 0 or more times
//  re = /\D/;  // match any non digit
//  re = /\s/;  // match whitespace character
//  re = /\S/;  // match Non-whitespace character
//  re = /Hell\b/i;  // Word Boundary

// // Assertions
//  re = /x(?=y)/;    // match x only if followed by y
//  re = /x(?!y)/;    // match x only if NOT followed by y

// //  string to match
// const str = '3x3x3x3x';

// // log results
// const result = re.exec(str);
// console.log(result);

// function reTest(re, str) {
//   if(re.test(str)) {
//     console.log(`${str} matches ${re.source}`);
//   } else {
//     console.log(`${str} does not match ${re.source}`);
//   }
// }

// reTest(re, str);
