function reduce(arr, reduceCallback, initialValue) {
  //参数校验
  if (!Array.isArray(arr) || !arr.length ||
    typeof reduceCallback !== 'function') {
    return [];
  } else {
    //initialValue false 少执行一次
    //2.reduceCallback 怎么合并
    let hasInitialValue = initialValue !== undefined;
    let value = hasInitialValue ? initialValue : arr[0];
    for (let i = hasInitialValue ? 0 : 1; i < arr.length; i++) {
      value = reduceCallback(value,arr[i],i,arr);
    }
    return value;
  }
}

