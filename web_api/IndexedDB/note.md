基于origin存储，大小不受限，可以访问disk

存二进制arraybuffer：尺寸小，要存type，
取出： 转化成Blob，再ObjectUrl
`const blob = new Blob([item.image], { type: item.type });
const url = URL.createObjectURL(blob)`

存Base64 DataURL: 文件大
