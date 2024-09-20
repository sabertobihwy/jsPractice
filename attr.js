// attr只有两种类型，Symbol 和 字符串
const obj = {
    a: 0,
};

obj['1'] = 0;
obj[++obj.a] = obj.a++; // obj[1] = 2 

const values = Object.values(obj); // attr顺序：数字型字符串提前，然后按照添加次序排序
obj[values[1]] = obj.a;

console.log(obj);
