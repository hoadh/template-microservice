## Preparation

```bash
git clone https://github.com/hoadh/kafka-cluster-docker.git kafka-cluster
cd kafka-cluster
docker compose up
```

Wait some minutes for bootstraping Kafka cluster!

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
