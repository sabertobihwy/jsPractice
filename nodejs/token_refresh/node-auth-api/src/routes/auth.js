const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// 模拟数据库（可替换为 MongoDB、MySQL 等）
const users = [
    {
        loginId: 'admin',
        password: bcrypt.hashSync('admin123', 10)  // 加密后的密码
    }
];

// 登录接口
router.post('/login', async (req, res) => {

    const { loginId, password } = req.body;

    // 验证参数
    if (!loginId || !password) {
        return res.status(400).json({ message: '缺少 loginId 或 password' });
    }

    // 查找用户
    const user = users.find(u => u.loginId === loginId);
    if (!user) {
        return res.status(401).json({ message: '用户不存在' });
    }

    // 验证密码
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: '密码错误' });
    }

    // 生成 access_token 和 refresh_token
    const accessToken = jwt.sign(
        { loginId: user.loginId },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_ACCESS_EXPIRES }
    );

    const refreshToken = jwt.sign(
        { loginId: user.loginId },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_REFRESH_EXPIRES }
    );
    console.log(accessToken)
    // expose custom headers 
    res.setHeader('Access-Control-Expose-Headers', 'Authorization, RefreshToken');
    // res.json({ accessToken, refreshToken });
    res.setHeader('Authorization', `Bearer ${accessToken}`);
    res.setHeader('RefreshToken', `Bearer ${refreshToken}`);
    res.json({ message: 'success' })
});

// 刷新 token 接口
router.get('/refresh', (req, res) => {
    // console.log(req.headers)
    const refreshToken = req.headers['refreshtoken'].replace('Bearer ', '');
    console.log(refreshToken)
    if (!refreshToken) {
        return res.status(400).json({ message: '缺少 refreshToken' });
    }

    // 验证 refresh_token
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(401).json({ message: '无效的 refreshToken' });
        }

        // 生成新的 access_token
        const newAccessToken = jwt.sign(
            { loginId: user.loginId },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_ACCESS_EXPIRES }
        );
        // expose custom headers 
        res.setHeader('Access-Control-Expose-Headers', 'Authorization');
        res.setHeader('Authorization', `Bearer ${newAccessToken}`);
        res.json({ message: 'success' })
    });
});

// 受保护的资源接口
router.get('/protected', (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token)
    if (!token) {
        return res.status(401).json({ message: '未提供 Token' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: '无效的 Token' });
        }
        res.json({ message: '成功访问受保护资源', user });
    });
});

module.exports = router;