import React, { useState } from 'react';

export default function Condition(props) {
// 定义 state 来存储输入的 page 和 size
const [formData, setFormData] = useState({
  page: props.defaultPage,
  size: props.defaultSize
});

// 处理输入变化
const handleInputChange = (event) => {
  const { name, value } = event.target;
  setFormData({
    ...formData,
    [name]: value // 动态设置 page 或 size 的值
  });
};

// 提交表单时的处理
const handleSubmit = (event) => {
  event.preventDefault(); // 防止表单默认提交行为
  const { page, size } = formData;
  console.log(`Page: ${page}, Size: ${size}`);
  // 这里可以执行进一步的操作，例如发送请求
  props.onSearch({ page, size } )
};

return (
  <div>
    <h1>Controlled Form</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="page">Page: </label>
        <input
          type="number"
          id="page"
          name="page"
          value={formData.page}
          onChange={handleInputChange}
          placeholder="Enter page number"
        />
      </div>

      <div>
        <label htmlFor="size">Size: </label>
        <input
          type="number"
          id="size"
          name="size"
          value={formData.size}
          onChange={handleInputChange}
          placeholder="Enter page size"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
);
};

