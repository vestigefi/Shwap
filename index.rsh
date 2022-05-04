'reach 0.1';

/* Flow of the contract is as follows:
User creates the magic box, and sets the steps, it's either a linear,
percentage or exponential box. After this the box starts with a bounty,
every time the bounty is paid, the previous bounty setter gets to claim 
the bounty, and a new bounty is set in accordance to the chosen growth.
The last bounty setter can always reset the box's bounty to half of what
it used to be. In exchange for doing this, he gets a MagicalBoxToken.

A 1BP fee is charged for development fees, and a MagicalBoxToken is given
to the participant upon claiming their bounty.
*/

export const main = Reach.App(() => {

});
