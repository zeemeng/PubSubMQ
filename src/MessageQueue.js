import { Subscription } from "./Subscription.js";

export class MessageQueue {
  /**
   * @type {Subscription[]}
   */
  observers = [];

  /**
   * Creates a new subscription for a given message consumer, adds it to the subscription queue and returns it.
   * @param {function} callback A message consumer which will be invoked with a message as its argument every
   * time such a message is published. The message could be of any type, including `undefined`.
   * @returns {Subscription} A {@link Subscription} object which has an `unsubscribe` method for unsubscribing itself.
   */
  subscribe(callback) {
    const subscription = new Subscription(callback, this.observers);
    this.observers.push(subscription);
    return subscription;
  }

  /**
   * Pushes a new message to all subscribed consumers.
   * @param {any} message
   */
  publish(message) {
    this.observers.forEach(subscription => subscription.callback(message));
  }
}
