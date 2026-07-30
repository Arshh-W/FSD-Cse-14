import readline from "readline/promises";
import {stdin,stdout} from "process";
const cin=readline.createInterface({input:stdin,output:stdout});
const main=() => {
    let choice;
    do{
        console.log("Welcome to Amazon Shopping Cart🛒 ");
        console.log("1............Show Cart");
        console.log("2............Add Product");
        console.log("3............Remove Product");
        console.log("4............Update Quantity");
        console.log("5............Checkout");
        choice= await cin.question("Enter your choice: ");

        switch(Number(choice)){
            case 1:
                console.log("Show Cart");   
                break;
            case 2:
                console.log("Add Product");
                break;  
            case 3: 
                console.log("Remove Product");
                break;
            case 4:
                console.log("Update Quantity");
                break;
            case 5:
                console.log("Checkout");
                break;  

}
    }while(choice!=5);
cin.close();
}


main();


