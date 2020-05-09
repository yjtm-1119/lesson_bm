{/* <div id="root">
  <span class="demo">
    This is a span.
  </span>
  <p>DOM</p>
</div> */}


// DOM 树    AST   Tree Abstract    
// Abstract 业务 逻辑
// 算法 递归 


let dom = {
    tag: 'div',
    attrs: {
        id: 'root',
        className: 'wrap'
    },
    children: [
        {
            tag: 'span',
            attrs: {
                className: 'demo'
            },
            children: [
                // 公平， 
                // createTextNode()
                // createElement()
                {
                    tag: undefined,
                    text: 'This is a span.'
                }
            ]
        },
        {
            tag: 'p',
            children: [
                {
                    tag: undefined,
                    text: 'DOM'
                }
            ]
        }
    ]
}