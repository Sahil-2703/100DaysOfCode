const search = (arr, N, x) => {
    for ( let i=0; i < N; i++){
        if(arr[i] === x){
            return i;
        }
    }
    return -1
}

const main = () => {
    let arr = [2, 3, 4, 7, 9, 10]
    let x = 7;
    let N = arr.length;

    let result = search(arr, N, x)
    if(result === -1){
        console.log("Element is not present in array")
    }
    else{
        console.log("Element is present at index " + result)
    }
}

main();


