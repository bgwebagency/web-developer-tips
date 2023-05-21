const user = {
  username: 'johndoe',
  age: 32,
}

// task: throw TypeError if dev sets user.age to a non-number
const proxy = new Proxy(user, {
  set(target, prop, value) {
    if (prop === 'age' && typeof value !== 'number') {
      throw new TypeError('age must be a number')
    }
    target[prop] = value
    return true
  },
})

proxy.age = 33
console.log(proxy.age)
