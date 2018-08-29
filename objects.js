var test = "hello"

console.log(test)

test = new Object()

test.greet = new Object()

test.greet.nice = "hello"
test.greet.mean = "what do you want"
test.reply = "how are you?"

console.log(test)
console.log(test.greet.nice)
console.log(test.reply)