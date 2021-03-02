function _apply(context, argsArr) {
    context = context || window;

    const fnSymbol = Symbol('fn');
    context[fnSymbol] = this;
    
    context[fnSymbol](...argsArr);
    delete context[fnSymbol];
}