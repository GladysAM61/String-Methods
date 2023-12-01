var personas = "rauw, karolG, badBunny";
var people = "La, People, Anda, Activa, Alla, En, Culiacán,"


// Length:
function length(){
   let index= 0;
   let word= "Food"
   let lengthh = 0;
   while(word[index]){
          lengthh++;
          index++;
    }
   return lengthh;

}
console.log(length());


// Slice:
function slice(start,end){
   // creating a variable to hold the answer 
   var sliceee = "";
   // creating a for loop to go through the range
     for(let i=start;i<end; i++){
       sliceee += personas[i];
     }
    return sliceee; 
}
console.log(slice(0,4))


// Replace 
function replace(old,sym){
   let replacee= "";
//    negative one so it doesn't make sense and it could go through every single character
   let indexx= -1;
    for(let i=0; i<personas.length;i++ ){
        if(personas[i] === old && indexx<0){
            replacee += sym;
            indexx=0;
        }else{
           replacee += personas[i];
        }
        
    }
   return replacee;
}
// replaces the first a it finds with the letter o
console.log(replace("a","o" ))


// replace all
function replaceall(old,sym){
   let replacee= "";
       for(let i=0; i<personas.length;i++ ){
           if(personas[i] === old){
               replacee += sym;
           }else{
           replacee += personas[i];
           }
       }
      return replacee;
   }
// replaces all the letters b that it finds with a letter d
console.log(replace("b","d" ))


// concat
function concat(){
   let newString= "";
   // adding the people string into the variable newString
   for(let i=0;i<people.length; i++){
    newString += people[i];
   }
   // adding personas string into variable newString
   for(let i=0;i<personas.length; i++){
    newString += personas[i];
   }
  return newString; 
}
console.log(concat())


// charAt
function charAt(i){
    return people[i] 
}
console.log(charAt(4))