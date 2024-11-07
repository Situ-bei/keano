---
date: 2024-11-01
title: JS 虚拟列表案例
category: 
- 前端
- JS原理
tag:
- JS 基础
- 虚拟列表
- 面试
headerDepth: 6
excerpt: <p>JS 虚拟列表案例</p>
---
```html
<!DOCTYPE html>
<html>
<head>
    <title>虚拟列表示例</title>
    <style>
        .list-container {
            width: 500px;
            height: 400px;
            margin: 20px auto;
            overflow: auto;
            border: 1px solid #ccc;
            position: relative;
        }
        
        .list-phantom {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            z-index: -1;
        }
        
        .list-content {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
        }
        
        .list-item {
            padding: 10px;
            border-bottom: 1px solid #eee;
            display: flex;
            align-items: center;
        }
        
        .list-item:hover {
            background-color: #f5f5f5;
        }
        
        .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #1890ff;
            margin-right: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }
        
        .info {
            flex: 1;
        }
        
        .name {
            font-weight: bold;
        }
        
        .desc {
            font-size: 14px;
            color: #666;
            margin-top: 5px;
        }
    </style>
</head>
<body>
    <div id="app">
        <div class="list-container" ref="container">
            <!-- 用于撑开滚动条 -->
            <div class="list-phantom" ref="phantom"></div>
            <!-- 实际显示的内容 -->
            <div class="list-content" ref="content"></div>
        </div>
    </div>

    <script>
        class VirtualList {
        constructor(options) {
            // 初始化属性
            this.container = options.container;     // 容器元素
            this.phantom = options.phantom;         // 幽灵元素
            this.content = options.content;         // 内容元素
            this.itemHeight = options.itemHeight;   // 每项高度
            this.amount = options.amount;           // 总数据量
            
            // 生成数据
            this.items = this.generateItems(this.amount);
            
            // 计算可视区域高度
            this.screenHeight = this.container.clientHeight;
            
            // 起始索引和结束索引
            this.start = 0;
            this.end = this.start + this.visibleCount;
            
            this.init();
        }
        
        // 计算可视区域能显示的项目数
        get visibleCount() {
            return Math.ceil(this.screenHeight / this.itemHeight);
        }
        
        // 生成测试数据
        generateItems(amount) {
            return Array.from({ length: amount }, (_, index) => ({
                id: index,
                name: `用户 ${index}`,
                desc: `这是用户 ${index} 的描述信息`
            }));
        }
        
        // 初始化
        init() {
            // 设置幽灵元素的高度，用于撑开滚动条
            this.phantom.style.height = this.items.length * this.itemHeight + 'px';
            
            // 绑定滚动事件
            this.container.addEventListener('scroll', this.handleScroll.bind(this));
            
            // 首次渲染
            this.render();
        }
        
        // 滚动处理
        handleScroll() {
            // 获取当前滚动位置
            const scrollTop = this.container.scrollTop;
            
            // 计算当前的起始索引
            this.start = Math.floor(scrollTop / this.itemHeight);
            
            // 计算当前的结束索引
            this.end = this.start + this.visibleCount;
            
            // 设置偏移量，使用 transform 而不是 top 以获得更好的性能
            this.content.style.transform = `translateY(${this.start * this.itemHeight}px)`;
            
            // 更新渲染的内容
            this.render();
        }
        
        // 渲染可视区域的内容
        render() {
            // 获取可视区域的数据
            const visibleData = this.items.slice(this.start, this.end);
            
            // 渲染内容
            this.content.innerHTML = visibleData.map(item => `
                <div class="list-item">
                    <div class="avatar">${item.id}</div>
                    <div class="info">
                        <div class="name">${item.name}</div>
                        <div class="desc">${item.desc}</div>
                    </div>
                </div>
            `).join('');
        }
    }
    // 初始化虚拟列表
    window.onload = function() {
        new VirtualList({
            container: document.querySelector('.list-container'),
            phantom: document.querySelector('.list-phantom'),
            content: document.querySelector('.list-content'),
            itemHeight: 60,  // 每项的高度
            amount: 10000    // 列表项总数
        });
    };
    </script>
</body>
</html>
```