module.exports = {
    entry: {
        bundle: __dirname + "/src/sourceFile.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel?presets=es2015"
        }]
    }
}