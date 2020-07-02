function findShort(s) {
  const word_list = s.split(' ');
  let len_list = [];
  word_list.map(ele => {
    len_list.push(ele.length);
  })
  return Math.min(...len_list);
}
findShort("turns out random test cases are easier than writing out basic ones");