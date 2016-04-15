fis.match('::packager', {
    spriter: fis.plugin('csssprites')
});

fis.match('*', {
    useHash: true
});

fis.match('**.js', {
    optimizer: fis.plugin('uglify-js'),
    release : '/static/js$0'
});

fis.match('**.css', {
	useSprite : true,
    optimizer: fis.plugin('clean-css'),
    release : '/static/css$0'
});

fis.match('/img/(*.{png,gif,jpg,jpeg})', {
    optimizer: fis.plugin('png-compressor')
});
fis.match('index.html', {
    useHash: false,
    useMap: true
});
