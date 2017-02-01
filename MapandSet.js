//Map Example
var m = new Map();
m.set(1,"First");
m.set("2","Second");
m.set({third:3},"Third");
//Printing Map Values using for Each 
m.forEach(function(value,key)
{
	console.log(`Key : ${key} ,Value: ${value}`);
});

//Set Example Adding values and Printing them using for Loop
var s = new Set();
if(s.has(1)==false)
{
s.add(1);
}
if(s.has(2)==false)
	 {
	 	s.add(2);
	 }
	 if(s.has(3)==false)
	 {
	 	s.add(3);
	 }
	 if(s.has(1)==false)
	 {
	 	s.add(1);
	 }
	 console.log("Set size: "+s.size);
	 //printing set using for loop
	 for(let item of s)
	 {
	 	console.log("Values:"+item);
	 }


	 //Array  of String passed Set and string array printed by using spread
	 var str = ["Hello","John","Add","Sheep"];
	 var s2 = new Set(str);
	 console.log(s2.has("Hello"));
	 console.log(s2.has("John"));
	 console.log(s2.has("Add"));
	 console.log(s2.has("Sheep"));
	 //function to display string array
	 function print(...args)
	 {
	 	console.log(args);
	 }
	 print(...str);
