// Using for loop (index-based):  

var studentMarks : number[] = [85,90,78,92,88];
console.log("Student Marks: ")

for(var i=0; i<studentMarks.length; i++){
    console.log(`Subject ${i + 1} : ${studentMarks[i]}`);
}