"use strict";
exports.__esModule = true;
var getPersonName = function (person) {
    console.log(person.name);
    return person.name;
};
var setPersonName = function (person, name) {
    person.name = name;
};
// const setPersonGender = (person: Person, gender: string):void=>{
//   person.gender = gender //报错
// }
var person = {
    name: 'zzz',
    say: function () {
        return 'hello';
    }
};
// getPersonName(person)
// setPersonName(person,'aaa')
// getPersonName(person)
// getPersonName({
//   no: 2,
//   name: 'lalal'
// })   
var User = /** @class */ (function () {
    function User() {
        this.name = 'haha';
        this.age = 23;
    }
    User.prototype.say = function () {
        return 'hi';
    };
    return User;
}());
