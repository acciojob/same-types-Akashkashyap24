function isSameType(value1, value2) {
  //your js code here
	let a=typeof value1;
	let b=typeof value2;
	 if((a==NaN && b==NaN)|| a===b){
		return true;
	 }
	 else if((typeof value1==NaN && typeof value2!=NaN)|| a!=b){
		return false;
	 }
}
console.log(a);
// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
