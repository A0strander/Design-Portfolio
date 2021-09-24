const path = require('path')

module.exports = {
    entry: {
        index: ['core-js/stable', 'regenerator-runtime/runtime', './src/item-app/index.js'],
        notes: ['core-js/stable', 'regenerator-runtime/runtime', './src/note-app/note-view.js'],
        edit: ['core-js/stable', 'regenerator-runtime/runtime', './src/note-app/edit.js'],
        grocery: ['core-js/stable', 'regenerator-runtime/runtime', './src/list-app/grocery.js'],
        view: ['core-js/stable', 'regenerator-runtime/runtime', './src/item-app/view-item.js'],
        recipes: ['core-js/stable', 'regenerator-runtime/runtime', './src/item-app/recipes.js'],
        articles: ['core-js/stable', 'regenerator-runtime/runtime', './src/item-app/articles.js'],
        saved: ['core-js/stable', 'regenerator-runtime/runtime', './src/item-app/saved.js']
    },
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: '[name]-bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    },
    devtool: 'source-map'
}
