# Merge-api
> Adapter to return canonical information from different APIs.

Merge different leisure apps to get data with the same interface.  Available APIs:
- OMDB
- Google Book API

## Installation

OS X & Linux:

```sh
TBD
```

Windows:

```sh
TBD
```

## Usage example

Look by id:\
`http://localhost:3030/:type/:id`\
type → book, movie, game

Search \
`http://localhost:3030/?name=gardians`\
`http://localhost:3030/?name=gardians&type=:type&page=:page`\
type → search-book, search-movie, search-game, search-all \
page → [1, ...]


## Development setup

```sh
yarn install
echo "
{
      "env":{
          "OMDB_API_KEY":"YOUR_API_KEY"
      }
}" > nodemon.json
yarn start
```

## Release History

* 0.0.1
    * Work in progress

## Meta

Sergio Pérez – [@sergi9p](https://twitter.com/sergi9p)

Distributed under the MIT license.

[https://github.com/serpean/](https://github.com/serpean/)

## Contributing

1. Fork it (<https://github.com/serpean/merge-api/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

