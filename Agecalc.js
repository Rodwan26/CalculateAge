const btn = document.getElementById("btn");
const inpt = document.getElementById("inpt");
const result = document.getElementById("result");

inpt.max =  new Date().toISOString().split("T")[0];



 function AgeCalc(){
    const birthDay = new Date(inpt.value);
d1 = birthDay.getDate();
m1 = birthDay.getMonth();
y1 = birthDay.getFullYear();

const ToDay = new Date();
d2 = ToDay.getDate();
m2 = ToDay.getMonth();
y2 = ToDay.getFullYear();
   console.log("hi");
  let d3 = d2 - d1;
  let m3 = m2 - m1;
  let y3 = y2 - y1;

  if(m3 < 0 ){
    y3--;
    m3 = 12 - m2 + m1;
  }
if(d3 < 0){
  m3--;
  d3 = getDayinMonth() - d1 + d2;
}
 function getDayinMonth(year,mounth){
  return new Date(year,mounth,0);
 }
console.log(y3,m3,d3);
result.innerHTML = `your age is ${y3} year and ${m3} month and ${d3} days`

 }


