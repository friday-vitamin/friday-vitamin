# 02 Webpack

https://github.com/friday-vitamin/friday-vitamin

What is webpack

webpack is a module bundler for modern JavaScript applications


Concepts
Entry
- webpack creates a graph of all of your application's dependencies
- The starting point of this graph is known as an entry point.


Output
- tell webpack where to bundle our application


Loaders
- webpack treats every file as a module
- Loaders transform these files into modules as they are added to your dependency graph.

At a high level, they have two purposes in your webpack config.

1. Identify what files should be transformed by a certain loader. (`test` property)
2. Transform that file so that it can be added to your dependency graph (and eventually your bundle). (`use`property)


Plugins
- Performs actions and custom functionality on "compilations" or "chunks" of your bundled modules

Resources

https://webpack.js.org/concepts/
https://babeljs.io/docs/setup/#installation
