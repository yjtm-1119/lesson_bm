// console.log('hehehehe');
var members = [
    {
        id: 32641,
        name: '徐剑豪1',
        avatar: 'https://mirror-gold-cdn.xitu.io/16f6a40b04544d8c7dc?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'
    },
    {
        id: 520,
        name: '徐剑豪2',
        avatar: 'https://mirror-gold-cdn.xitu.io/16f6a40b04544d8c7dc?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'
    },
    {
        id: 10000,
        name: '徐剑豪3',
        avatar: 'https://mirror-gold-cdn.xitu.io/16f6a40b04544d8c7dc?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'
    }
];
console.log(members);
var tbody = document.querySelector('#member tbody');
// tbody.innerHTML =
tbody.innerHTML = members.map(function (member) {
    return "\n    <tr>\n        <td>" + member.id + "</td>\n        <td>" + member.name + "</td>\n        <td>\n            <img src=\"" + member.avatar + "\">    \n        </td>\n    </tr>\n    ";
}).join(""); //.join可以把数组变成字符串
