# Joshua's Backend Framework

This is a little experiment to make a [NestJS](https://nestjs.com/)-like backend framework using [native JavaScript decorators](https://github.com/tc39/proposal-decorators). There's a lot of half-baked ideas here, but the implementation supports:

- Routing with Regex/string pattern matching and [named capture groups](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- Half-baked dependency injection. I still haven't figured out how to use `@inject` on a private field.
- Middleware-like universal interface with `(req, res) => ...`

Things I've learned while implementing this:

- Decorators are extremely intuitive to use.
- Decorators are also easy to write unless you need to preserve `this`. I haven't landed on a more elegant solution than calling `method.call(this, ..args)` in every single decorator. Of course, one could create a `@bound` decorator or wrap the decorator definition in a higher order function, but it does betray how awkward metaprogramming in classes can be.
- Currently, it's much easier to write in JavaScript vs. TypeScript if you plan to write decorators that change the return type of the value being decorated. This should hopefully come to TypeScript soon, but in the meantime you have to use `@ts-ignore` everywhere. Not fun.

For more decorator experiments: https://github.com/manuscriptmastr/decorator-playground
