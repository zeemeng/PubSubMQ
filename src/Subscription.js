export class Subscription {
  /**
   * @param {function} callback A message consumer which will be invoked with a message as its argument every
   * time such a message is published. The message could be of any type, including `undefined`.
   * @param {Subscription[]} subscriptionContainer A container array which tracks currently registered subscriptions.
   */
  constructor(callback, subscriptionContainer) {
    this.callback = callback;

    /**
     * Removes the current subscription from the subscription queue. The subscribed consumer will stop receiving future messages.
     */
    this.unsubscribe = () => {
      const index = subscriptionContainer.indexOf(this);
      if (index > -1) subscriptionContainer.splice(index, 1);
    };
  }
}
