var condition = {
    build: false
}

var path = {
    src: './src',
    src_js: './src/js',
    src_css: './src/css',
    src_img: './src/img',
    src_template: './src/template',
    src_partial: './src/partial',

    dist: './dist',
    dist_js: './dist/js',
    dist_css: './dist/css',
    dist_img: './dist/img',
    dist_template: './dist/template',
    dist_partial: './dist/partial'
}

var file = {
    entry: path.src_js + '/entry.js',
    css: path.src_css + '/**/*.css',
    img: path.src_img + '/**/*.png',
    js: path.src_js + '/**/*.js',
    jsx: path.src_js + '/**/*.jsx',
    html: path.src + '/**/*.html',
    template: path.src_template + '/**/*.hbs',
    partial: path.src_partial + '/**/*.hbs',
    bundle_js: 'bundle.js',
    bundle_css: 'bundle.css'
}

module.exports = {
    condition: condition,
    file: file,
    path: path
};

