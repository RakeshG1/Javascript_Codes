# Javascript_Codes

### Install Nodejs & NPM
- Using Mac - Homebrew (package manager)
```
(base) rocks-Air:Javascript_Codes rock$ brew install node

(base) rocks-Air:Javascript_Codes rock$ node -v
v19.9.0

(base) rocks-Air:Javascript_Codes rock$ npm -v
9.6.3
```

### Execute Javacsriot Codes
(base) rocks-Air:Scripts rock$ node HelloWorld.js 
Hello World.

- Or Execute file directly in vscode using .coderunner extension. But for this. Nodejs should be installed in the system. .Coderunner just uses this installed path

### Install D3.js
- https://www.geeksforgeeks.org/d3-js-array-from-method/
```shell
npm install d3
```

### D3.js Visuals
- https://d3-graph-gallery.com/

### Using SASS Styling HTML files
```shell
# npm package manager version
(base) rocks-Air:Javascript_Codes rock$ npm --version
9.6.3

# Install scss i.e., SASS
# https://sass-lang.com/install
(base) rocks-Air:Javascript_Codes rock$ npm install -g scss

added 2 packages in 2s
npm notice 
npm notice New patch version of npm available! 9.6.3 -> 9.6.5
npm notice Changelog: https://github.com/npm/cli/releases/tag/v9.6.5
npm notice Run npm install -g npm@9.6.5 to update!
npm notice 

# npm version update
(base) rocks-Air:Javascript_Codes rock$ npm install -g npm@9.6.5

# npm package manager version
(base) rocks-Air:Javascript_Codes rock$ npm --version
9.6.5

# Install scss i.e., SASS
(base) rocks-Air:Javascript_Codes rock$ npm install node-sass
npm WARN deprecated @npmcli/move-file@2.0.1: This functionality has been moved to @npmcli/fs
npm WARN deprecated @npmcli/move-file@1.1.2: This functionality has been moved to @npmcli/fs

added 210 packages in 13s

20 packages are looking for funding
  run `npm fund` for details

# node-sass version
(base) rocks-Air:Javascript_Codes rock$ node -e "console.log(require('node-sass').info)"
node-sass	8.0.0	(Wrapper)	[JavaScript]
libsass  	3.5.5	(Sass Compiler)	[C/C++]

```