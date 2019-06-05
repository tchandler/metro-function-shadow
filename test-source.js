
// This will be preserved
function foo(foo) {
  return foo
}

// This will be removed
function bar(bar, cat) {
  return cat
}

// At runtime, this will throw an exception
bar.foo = foo

module.export = { bar: bar }
