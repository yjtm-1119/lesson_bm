function likes(names) {
  const len = names.length;
  if (len) {
    let name = [...names]
    if (len === 1) {
      return `${names[0]} likes this`
    } else if (len === 2) {
      return `${names[0]} and ${names[1]} like this`
    } else if (len === 3) {
      return `${names[0]}, ${names[1]} and${names[2]} like this`
    } else {
      return `${names[0]}, ${names[1]} and${len - 2} others like this`
    }
  } else {
    return `no one likes this`
  }
}
console.log(likes(["Alex", "Jacob", "Mark", "Max"]))