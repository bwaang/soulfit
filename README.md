# Soulfit Challenge

An application to help track the Soulfit statistics.

## Installation

If you would like a local copy of this project please navigate to the directory where you would like to clone it and run:

```
git clone https://github.com/bwaang/soulfit
cd soulfit
```

Make sure to **install all dependencies** with `bower install` and `npm install` that are not found in this repository.

To **start your server** just run the command `grunt serve`.

It should redirect you to your [local server](http://localhost:9000/) under port 9000, and you should be good to go.

For more detailed installation instruction please refer to the [Wiki](https://github.com/bwaang/soulfit/wiki/Setup).

## Basic File Structure

Pull up your favorite editor and start developing: I would suggest [Sublime Text](http://www.sublimetext.com/) or the newly developed [Atom](https://atom.io)

All the **views** can be found under:

```
app/views/
```

You can modify the **less/css** styles under:

```
app/styles/less
```

Make to do your data manipulation in `soulfitdataservice.js` under:

```
app/scripts/services/soulfitdataservice.js
```

And push the data to the `main.js` controller under:

```
app/scripts/controllers/main.js
```

## Other Tips

  * The [angular](https://docs.angularjs.org/tutorial) setup guide is a good reference to get started.
  * I would also suggest to use a scaffolding tool like [Yeoman](http://yeoman.io/) to [generate](https://github.com/yeoman/generator-angular) all your code.
  * For frontend development familiarize yourself with [less](http://lesscss.org/) and [Bootstrap](http://getbootstrap.com/)
  * Please check the [Wiki](https://github.com/bwaang/soulfit/wiki) for more development information.
