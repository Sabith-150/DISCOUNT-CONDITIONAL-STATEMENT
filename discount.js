var bill = 120

if(bill>=100){
    console.log("You have an discount, Total = ",bill-20)
}
else if(bill>=50 && bill<100){
    console.log("You have an discount, Total = ",bill-10)
}
else{
    console.log("You dont have any discount, Total = ",bill)
}