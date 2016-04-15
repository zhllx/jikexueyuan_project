// 加 md5
fis.match('*.{js,css,png,jpg}', {
    useHash: true
});

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
    spriter: fis.plugin('csssprites')
})

// 对 CSS 进行图片合并
fis.match('*.css', {
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true
});

fis.match('*.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});
// 打包css js
fis.match('::package', {
    postpackager: fis.plugin('loader')
});

fis.match('*.css', {
    packTo: '/all_new.css'
});

fis.match('*.js', {
    packTo: '/all_new.js'
});
// 所有文件放在static文件下
fis.match('*', {
    release: '/static/$0'
});
fis.match('*.html', {
    release: '$0'
});
// 发布到本地server
fis.match('*', {
    deploy: fis.plugin('local-deliver', {
        to: 'D:/xampp/htdocs' //本地服务器地址
    })
});