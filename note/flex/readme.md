- 传统布局  display + position + float

- 任何一个容器都可以指定为 Flex 布局，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效

    flex-direction: row | row-reverse | column | column-reverse; 设置主轴方向和主轴起始方向
    
    flex-wrap: nowrap | wrap | wrap-reverse;
    设置是否换行 默认不换行
    这两个属性可以简写 flex-flow: <flex-direction> || <flex-wrap>; 有顺序要求

    justify-content属性定义了项目在主轴上的对齐方式
    flex-start（默认值）：左对齐
    flex-end：右对齐
    center： 居中
    space-between：先两边贴边 再平分剩余空间
    space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍  即直接平分剩余空间

    align-items 设置侧轴上的子元素排列方式 用于单行子项
    flex-start：侧轴的起点对齐。
    flex-end：侧轴的终点对齐。
    center：侧轴的中点对齐。
    baseline: 项目的第一行文字的基线对齐。
    stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

    align-content 设置侧轴上的子元素排列方式 用于多行子项
    flex-start：与侧轴的起点对齐。
    flex-end：与侧轴的终点对齐。
    center：与侧轴的中点对齐。
    space-between：子项在侧轴先分布在两头 再平分剩余空间
    space-around：子项在侧轴平分剩余空间
    stretch（默认值）：默认占满整个侧轴。


    项目属性设置
    order 定义项目的排列顺序 默认是0 越小越靠前 可以用来实现3栏布局
    flex-grow  定义项目的放大比例 默认为0不放大
    flex-shrink 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。  不可以取负值
    flex-basis 定义了在分配多余空间之前，项目占据的主轴空间
    flex是flex-grow, flex-shrink 和 flex-basis的简写 默认为0 1 auto  后两个值可选  建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值
    align-self 控制子项自己在侧轴上的排列方式 属性与align-items 相同 但只用于控制自己