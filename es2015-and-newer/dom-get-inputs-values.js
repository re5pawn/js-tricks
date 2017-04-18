/**
 * HTML
 * <form>
 *  <input type="text" name="firstName" value="John">
 *  <input type="text" name="secondName" value="Doe">
 *  <input type="email" name="contactEmail" value="johndoe@email.me">
 * </form>
 */

let inputs = [...document.querySelectorAll('form input')];
// or
// let inputs = Array.from(document.querySelectorAll('form input'));

let [firstName, secondName, contactEmail] = inputs.map(i => i.value);

console.log(firstName, secondName, contactEmail); // John Doe johndoe@email.me
