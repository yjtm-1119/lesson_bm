// console.log('hehehehe');

// 数据不合法 ，数据不严谨  如何让不严谨的数据 守规矩呢？
// 接口  interface 接口
interface MembersEntity{
    id: number;
    name: string;
    avatar: string;
}



const members:MembersEntity[] = [
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
        avatar:'https://mirror-gold-cdn.xitu.io/16f6a40b04544d8c7dc?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'
    }
]
console.log(members);

const tbody = document.querySelector('#member tbody');
// tbody.innerHTML =
tbody.innerHTML = members.map((member) => {
    return `
    <tr>
        <td>${member.id}</td>
        <td>${member.name}</td>
        <td>
            <img src="${member.avatar}">    
        </td>
    </tr>
    `
}).join("")//.join可以把数组变成字符串

