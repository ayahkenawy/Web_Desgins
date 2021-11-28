var degree = prompt("Please Enter ur Degree");
if(degree>100) console.log("Please Enter Avalid Degree");
else if(degree>=90) console.log("A");
else if(degree>=80) console.log("B");
else if(degree>=70) console.log("C");
else if(degree>=60) console.log("D");
else console.log("Failed");

function looping(startNum,endNum,breakNum,continueNum)
{
    for(i=startNum;i<=endNum;i++)
    {
        debugger
        if(i==breakNum) break;
        if(i==continueNum)continue;
        console.log(i)
    }
}
looping(0,10,8,5)