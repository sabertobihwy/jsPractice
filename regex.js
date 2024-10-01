const str = '100000000000'

// format using regular expression
// (?= ...) 在正则表达式中表示正向前瞻（Positive Lookahead）; 零宽
// 除了正向前瞻 (=...)，还有负向前瞻 (?! ...)，用于断言后面不应该匹配特定的模式。
// \B : 这个?= 前瞻位置必须是非单词边界！
// \b： 是单词边界
// 也就是 这个?= 前瞻位置必须是非单词边界 + $结束之前匹配到3，6，9个\d的位置前面
let s = str.replace(/(?=\B(\d{3})+$)/g, ',')
console.log(s)