const isPalindrome = (x) => {
    if(typeof(x) == "string"){
        const lowerCase = x.toLowerCase();
        const reverse = lowerCase.split("").reverse('').join("");
        console.log(lowerCase);
        console.log(reverse);
        if(reverse == x){
            console.log(`True, the given string is a palidrome`);
        }else{
            console.log(`False, the given string is  not a palidrome`);
        }
    }else if(typeof(x) == "number"){
        const str = x.toString();
        console.log(str);
       const reverse= str.split("").reverse("").join("");
       if(reverse == x){
           console.log(`True, its a palidrome`);
       }else{
           console.log(`False, its not a palidrome`);
       }
       console.log(reverse);
    }else{
        console.log(`data type should be number or string`);
    }
}

 isPalindrome(12321)


