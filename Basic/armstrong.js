function isArmstrong(n){
   // let digit = n.toString().length;
   let digit = 0;
    let sum = 0;
    let nn = n;
    while( nn > 0){
        nn = nn /10;
        digit++;
    }
      nn = n;

    while (nn > 0){
        let rem = nn % 10;
        sum = sum + Math.pow(rem, digit);
        nn = nn / 10;
    }
    return sum === n;

}
console.log(isArmstrong(153))