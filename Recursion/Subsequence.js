//for every we have 2 options : TC - 2^n  * n (with length if every subsequence)





const printSubs =(i,ds,array,n)=>{
 if(i===n){
    ds.forEach(element => {
        console.log(element)
    });
    if(ds.length===0){
        console.log('{}')
    }
    console.log("\n")
    return;
 }
 ds.push(array[i])
 printSubs(i+1,ds,array,n)
 ds.pop()

 printSubs(i+1,ds,array,n)

}


const array = [3,1,2]
const ds=[]

printSubs(0,ds,array,array.length)