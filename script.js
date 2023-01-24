function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let thousand=Math.floor(num/1000);
    let hundred=Math.floor((num%1000)/100);
    let ten=Math.floor((num%100)/10);
    let one=Math.floor((num%10));

    
  let ones=['','I','II','III','IV','V','VI','VII','VIII','IX'];
  let tens=['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
  let hundreds=['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];
  let thousands=(thousand==0)?'':"M".repeat(thousand);
  return (thousands+hundreds[hundred]+tens[ten]+ones[one]);

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
