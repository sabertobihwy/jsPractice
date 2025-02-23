require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

// 解析 JSON 请求体
app.use(express.json());
app.use(cors({
    origin: 'http://127.0.0.1:5500'  // 前端的地址
}));
// 引入路由
const authRoutes = require('./routes/auth.js');
app.use('/api/auth', authRoutes);

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`服务器已启动: http://localhost:${PORT}`);
});
