
// Spread Operator...
//
const udemy = 'udemy'
const letters = [...udemy];
console.log(letters);

kaka, the result is
["u", "d", "e", "m", "y"]

************************************
const boys = ['deren', 'hawler', 'hawraz'];
const girls = ['basha', 'kiwi', 'bala'];

const bestFriend = ['myself'];

const friends = ['deren', ...girls, 'hawler']
console.log (friends);
the result is;
["deren", "basha", "kiwi", "bala", "hawler"]
*******************************
const boys1 = ['deren', 'hawler', 'hawraz'];
const girls1 = ['basha', 'kiwi', 'bala'];

const bestFriend1 = ['myself'];
const friends1 = [...boys1,bestFriend1, ...girls1]

console.log (friends1)
the result is
["deren", "hawler", "hawraz", Array(1), "basha", "kiwi", "bala"]
*******************
//
const newFirends = [...friends1]
newFirends[0] = 'awara' // here we add a name for newFirends
console.log(newFirends);
the answer is;
["awara","deren", "hawler", "hawraz", "myself", "basha", "kiwi", "bala"]
**************************
// now with objects, first it need carly brackets

const person = {name: 'john', job: 'developer'};
const newPerson = {...person} // the give the same thing but how can we add a property?
const newPerson = {...person, city:"hawler"}
console.log(person) ===> {name: 'john', job: 'developer'}
console.log(newPerson) ===> {name: 'john', job: 'developer', city:"hawler"}
******

and like that // change value for properties
const newPerson = {...person, name:"aland"}
onsole.log(newPerson) ===> {name: 'aland', job: 'developer', city:"hawler"}
