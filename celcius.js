const cToF = function  (celcious){ 

const cTemp = celcious; 
const ToFahr = cTemp * (9 / 5) +32; 
const msg = `${cTemp}\xB0C => ${ToFahr} \xB0F.`;
return msg;   
}

console.log(cToF(10));
console.log(cToF(60));
