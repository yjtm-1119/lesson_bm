// reducer 就是函数
let comments = [
  {
    "id": 1,
    "username": "蔡徐坤",
    "content": "鸡你太美"
  }
];
export default function (state = {
  comments: comments
}) {
  return state
}