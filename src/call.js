function _call(context, ...args) {
    context = context || window;
    const fnSymbol = Symbol('fn');
    context[fnSymbol] = this;
    context[fnSymbol](...args);
    delete context[fnSymbol];
}