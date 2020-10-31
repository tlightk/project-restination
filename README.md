# Restination

Welcome to Restination, your one-stop single-page app for searching truck stops in the contiguous United States! Whether you're on a road trip, driving cross-country, or just looking for the nearest place to rest, our app delivers the best in searching for the truck stops that will suit your needs. Rest with us on the way to your destination!

## Getting Started



### Prerequisites

Install Postgres and create a new project titled "truckstop" in your local machine.

```
CREATE DATABSE truckstop;
```

### Installing

Set up yarn and dependencies by typing yarn into your command line.

```
yarn
```

Create an .env file in the root folder and add the database URL line with your Postgres user credentials.

```
DATABASE_URL=postgres://${USER:PASSWORD}@127.0.0.1:5432/truckstop
```

Type into your command line yarn start to run migrations. This will create a table "locations" in your truckstop database. The locations table will then be seeded with truck stops and their relevant data.

```
yarn start
```

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Deploy Restination on [Heroku](www.heroku.com). Our deployment can be seen [here.](https://restination.herokuapp.com/)

## Built With

* [Vue](https://vuejs.org/) - Web Framework
* [Vuex](https://vuex.vuejs.org/) - State Management Library
* [PostgresQL](https://www.postgresql.org/) - Database Management
* [Knex](http://knexjs.org/) - Query Builder
* [axios](https://github.com/axios/axios) - HTTP Client

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Authors

* **Sivani** - *Tech Lead/Developer* - Git handle: [heysivani](https://github.com/heysivani)
* **Nina Matti** - *Developer* - Git handle: [ninamatti](https://github.com/ninamatti)
* **Michael Piastucki** - *Developer* - Git handle: [happymanju](https://github.com/happymanju)
* **Clay Xiong** - *Developer* - Git handle: [tlightk](https://github.com/tlightk)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [Code Chrysalis](https://www.codechrysalis.io/)
* Members of CC15
* Potato
