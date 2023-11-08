// let alternate=()=>{
//     let word = "sanjeet"
//     let array1 = []
//     array1.push(word)
//     console.log(array1)
//     let array2 = array1.split(",")
//     console.log(array2)
// }
// alternate()

// let alternate = () => {
//     let word = "sanjeet";
//     let array1 = [];
//     array1.push(word);
//     console.log(array1);

//     // Use split on the string 'word', not on the array 'array1'
//     let array2 = word.split("");
//     console.log(array2);

//     for(let i=0; i<array2.length; i++){
//         if(i%2===0){
//             let upper = array2[0][i].toUpperCase()
//             console.log(upper)
//         }else{
//             let lower = array2[0][i].toLowerCase()
//             console.log(lower)
//         }
//         // let a  = array2[0]
//         // let upper = a.toUpperCase()
//         // console.log(a)
        
//         // console.log(upper)
  
//     }
// }

// alternate();
function alternate(word){
    let list1 = []
    let input = list1.push(word)

    console.log(list1)
    // let input = ["sanjeet"]; 
    let result = [];

    for (let i = 0; i < list1[0].length; i++) {
        if (i % 2 === 0) {
            result.push(list1[0][i].toUpperCase());
        } else {
            result.push(list1[0][i].toLowerCase());
        }
    }
    let s = result.join("")
    console.log(result);
    console.log(s)
}
alternate("hello world")