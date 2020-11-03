// 找不同
function diffArray(arr1, arr2) {
    var newArr = [];
    newArr = [...arr1,...arr2].filter(ele=>{
        console.log(!arr2.includes(ele) , !arr1.includes(ele));
      return !arr2.includes(ele) || !arr1.includes(ele)
       
    })
    // 这是一个党异伐同的过程
    return newArr;
  }
  
//   console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

function destroyer(arr,...other) {
    console.log(arr,other);
    var other = Array.from([...arguments]).slice(1)
    // 删掉那些值
    return arr.filter(ele=> other.indexOf(ele)==-1);
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))