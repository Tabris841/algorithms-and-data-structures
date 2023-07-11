type Callback = () => void;

class EventEmitter {
  private events = new Map<string, Callback[]>();

  on(event: string, callback: Callback) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event)?.push(callback);
  }

  emit(event: string) {
    const callbacks = this.events.get(event);
    if (callbacks) {
      callbacks.forEach((callback) => callback());
    }
  }

  removeListener(event: string, callback: Callback) {
    const callbacks = this.events.get(event);
    if (callbacks) {
      const index = callbacks.indexOf(callback);
      if (index >= 0) {
        callbacks.splice(index, 1);
      }
    }
  }

  removeAllListeners(event: string) {
    this.events.delete(event);
  }

  once(event: string, callback: Callback) {
    const wrapper = () => {
      callback();
      this.removeListener(event, wrapper);
    };

    this.on(event, wrapper);
  }

  listenerCount(event: string) {
    return this.events.get(event)?.length ?? 0;
  }
}

const eventEmitter = new EventEmitter();

const testCallback = () => {
  console.log('test');
};

eventEmitter.once('test', testCallback);

eventEmitter.emit('test');
eventEmitter.emit('test');

eventEmitter.removeListener('test', testCallback);

eventEmitter.emit('test');
