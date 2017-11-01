function PlayerOne(score){
  this.score = score
};
function PlayerTwo(score){
  this.score = score
};
// function CurrentRoll(score){
//   this.score = score
// };
PlayerOne.prototype.saveTurn = function(amount){
  this.score += amount;}
PlayerTwo.prototype.saveTurn = function(amount){
  this.score += amount;}
// CurrentRoll.prototype.saveRoll = function(amount){
//   this.score += amount;}
// function getSum(total, num) {
//     return total + num;
// }
var currentRoll = [0];

$(document).ready(function() {
  $("#roll").click(function() {
    var rollDice = Math.floor(Math.random() * 6) + 1;
    // currentRoll = new CurrentRoll(rollDice);
    // alert(rollDice);
    if (rollDice === 1){
      currentRoll = [0]
    } else {
      currentRoll.push(rollDice);
    }
    $("span#currentRoll").text(rollDice);
    $("span#rollTotal").text(currentRoll);

  });
 //
 // $(".playerOneSave").submit(function() {
 //
 // });
 // $(".playerTwoSave").submit(function() {

 // });
});
