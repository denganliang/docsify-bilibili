# docsify-bilibili
在文章中插入bilibili视频，列表的形式iframe嵌入

## 使用方法

```
<script src="//unpkg.com/docsify-bilibili/bilibili.min.js"></script>

or

<script src="https://cdn.jsdelivr.net/npm/docsify-bilibili@latest/bilibili.min.js"></script>
```


在markdown中，下面的列表会触发bilibili视频列表：

```
- Bilibili video
- aid=708255828&bvid=BV1wQ4y1E7SW&cid=1395326689&p=1
- aid=666024576&bvid=BV1pa4y1m7yN&cid=1401696220&p=1
- aid=666024576&bvid=BV1pa4y1m7yN&cid=1401696220&p=1
- aid=666024576&bvid=BV1pa4y1m7yN&cid=1401696220&p=1
- aid=666024576&bvid=BV1pa4y1m7yN&cid=1401696220&p=1
```

即以```- Bilibili video```开头的列表，会转换成iframe列表
```
<div style="display: flex;flex-wrap: wrap; justify-content: flex-start; align-items: stretch; ">
    <div style="width: 600px; height: 400px;flex-grow: 0;min-width: 100px;margin: 10px;">
          <iframe src="//player.bilibili.com/player.html?aid=708255828&bvid=BV1wQ4y1E7SW&cid=1395326689&p=1&autoplay=0" style="width: 100%; height: 100%;" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
    </div>
    <div style="width: 600px; height: 400px;flex-grow: 0;min-width: 100px;margin: 10px;">
        <iframe src="//player.bilibili.com/player.html?aid=666024576&bvid=BV1pa4y1m7yN&cid=1401696220&p=1&autoplay=0" style="width: 100%; height: 100%;" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
    </div>
    <div style="width: 600px; height: 400px;flex-grow: 0;min-width: 100px;margin: 10px;">
        <iframe src="//player.bilibili.com/player.html?aid=666024576&bvid=BV1pa4y1m7yN&cid=1401696220&p=1&autoplay=0" style="width: 100%; height: 100%;" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
    </div>
    <div style="width: 600px; height: 400px;flex-grow: 0;min-width: 100px;margin: 10px;">
        <iframe src="//player.bilibili.com/player.html?aid=666024576&bvid=BV1pa4y1m7yN&cid=1401696220&p=1&autoplay=0" style="width: 100%; height: 100%;" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
    </div>
    <div style="width: 600px; height: 400px;flex-grow: 0;min-width: 100px;margin: 10px;">
        <iframe src="//player.bilibili.com/player.html?aid=666024576&bvid=BV1pa4y1m7yN&cid=1401696220&p=1&autoplay=0" style="width: 100%; height: 100%;" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
    </div>
</div>
```
