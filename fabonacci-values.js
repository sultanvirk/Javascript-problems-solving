var a = 0;
var b = 1;

for (let i = 0; i <= 5; i++) {
    var temp = a + b; // 0+1 = 1
    a = b; // 0 = 1
    b = temp //1 = 1
    console.log(temp)
}