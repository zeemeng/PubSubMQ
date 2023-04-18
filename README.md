<h1 align="center">PubSubMQ</h1>
<p align="center">
  <img src="https://img.shields.io/npm/v/psmq?color=informational&logo=npm&logoColor=fff&logoWidth=12&label=npm%20package" alt="NPM package version" />
  <img src="https://img.shields.io/node/v/psmq" alt="supported node version" />
  <img src="https://img.shields.io/bundlephobia/min/psmq?color=success" alt="minified bundle size" />
  <img src="https://img.shields.io/github/license/zeemeng/PubSubMQ" alt="license" />
</p>

## About

_PubSubMQ_ is a message queue system that implements the publish/subscribe pattern. It provide the ability for a message producer to **push** any type of payload to any number of message consumers in a synchronous fashion. (An async implementation is forthcoming)

It is ready to be used in both web browser and Node/server-side environments. It can be leveraged for example to create reactive UI elements.

## Installation

Via NPM:

```shell
npm i psmq
```

or `git clone` this [repository](https://github.com/zeemeng/PubSubMQ.git).

## Usage

Importing the module:

```js
import { MessageQueue } from "psmq"; // In a Node environment

// OR

import { MessageQueue } from "./psmq/index.js"; // Import from index.js in non-Node environments
```

Creating and using a message queue instance:

```js
const mq = new MessageQueue();

// Register a "message consumer" in the form of a callback argument to the `subscribe` method,
// which returns a `Subscription` object.
const subscription1 = mq.subscribe(message => console.log("From consumer 1:", message));
const subscription2 = mq.subscribe(message => console.log("From consumer 2:", message));

// Publish some messages
mq.publish(123);
mq.publish("hello world");
// OUTPUT
// From consumer 1: 123
// From consumer 2: 123
// From consumer 1: hello world
// From consumer 2: hello world

// Call the `unsubscibe` method on the `Subscription` object to stop its associated "message consumer"
// to receive further messages. It is important to call `unsubscribe` when further message updates
// are no longer necessary so as to avoid memory leaks.
subscription1.unsubscribe();

mq.publish("some more news");
// OUTPUT
// From consumer 2: some more news

subscription2.unsubscribe();
mq.publish("anyone here?");
// NO OUTPUT
```

## Notes

- This package is fully annotated and supports **IntelliSense**.
- Suggestions and contributions are welcome.
