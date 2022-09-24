///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((previousValue, currentValue) => {return previousValue + currentValue['price']},0)
// console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal,couponValue,tax) => (cartTotal*(1+tax)-couponValue)
// console.log(calcFinalPrice(10,1,0.06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
The restrutant would need to store the customer's name so that it could personalise communications and make sure it delivers to the right person by asking their name.
I would store the customer's name as a string as it contans letters and although one could store each of a customer's names as a sepearte value in an array I cannot think of any practical advantages to
doing so and this datatype consumes more memory.
The resturant would need to store the customer's address so that it knew where to send its orders.
I would store the customer's addresss as an object. If the resturant wanted to perform analytics regarding parts of its' customer's addresses such as sorting customers by town it could do so easily by 
extract through the value of a customer's town key whereas if the address was stored as a string this would also contain their postcode, addressLin1 etc and looking for a substring within the address
 that contains a town name may cause errors if, for example, a customer lives on a street called London road but not in the town of London. Additionally, using the set data type would allow for validation
 to be placed on different aspects of a customer's address in a program used to add a new customer object - for example, throwing an error if there is the wrong number
of digits in a postcode.
The resturant would need to store the customer's phone number so that it could contact the customer regarding any issues that may arise, for example the delivery driver being unable to find their address.
I would store the customer's phone number as a number because it should not contain non-numeric characters and only one value needs to be stored.
The resturant would need to store the customer's email address for sending recipts and junk mail and possibly logging into their account if one was used for purchases.
I would store the customer's email address as a string as it contains non-numeric characters and comprises of a single value.
The resturant would need to store the customer's password for authenticating log-ins to their website.
I would store the customer's password as a string as allowing customers to use non-numeric values would increase the number of possible password combinations users could set thereby making accounts
harder to hack and customers who wish to memorise their passwords may find it difficult to remember a sequence of numbers.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customer0 = {
    name: "AAAAAAA",
    address: {
        postcode: "AA00AA",
        addressLine1: "00 AAAAAA",
        addressLine2: "AAAAAA"
  
    },
  phoneNumber: 000000,
  emailAddress: "AAA@AAA.com",
  password: "AAAAAA"
  
  }
  console.log(customer0)