# Epicodus Week 4: Pig Dice Game

Pig Dice Game: Sam Kissee and Cat Janowitz; November 1, 2017

#### By Sam Kissee and Cat Janowitz

## Description

The design of this game is for 2 players to take turns rolling one dice. First player to reach 100 points wins. During each turn, a player rolls the dice (i.e., clicking "Roll!" button that randomly generates a number from 1 to 6) and if they get a 1 they get 0 points and it's the next player's turn. If they roll other than 1, they accumulate points during that turn and can choose to hold at any point. When clicking on the "Hold" button, the player saves their accumulated points, which displays under their name.

## SPECIFICATIONS

* players decide who goes first

* player 1 clicks on "Roll!" button
  * Input: click
  * Output: Random number between 1 and 6
* player 1 can continue to click "Roll!" as long as the output number is not 1
* player 1 can choose to hold by pressing "Hold" button, which will save accumulated points (aka random numbers not 1)
  * Input: continued clicks
  * Output: accumulated score (i.e., 2, 6, 3 === 11)
  * Input: click on "Hold"
  * Output: displayed score "11" in player 1 section
* if player 1 gets the number 1 when clicking on "Roll!" their turn ends and any accumulated points are lost from that turn
  * Input: continued clicks until 1
  * Output: accumulated score (i.e., 2, 6, 1 === 0)
* player 2's turn
* player 1 and 2 continue to roll and store points until the first one reaches 100 points yay!



## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* jQuery

### License

* The MIT License (MIT) applies to:
* Bootstrap (and is copyright 2016 Twitter)
* jQuery


Copyright (c) 2017 **Sam Kissee, Cat Janowitz**
