1. Display all the 16 cells of the grid on your HTML page. Every cell has an 'X' as text and a numerical ID assigned.
2. Using Javascript, declare and/or initialize the following variables:</br>
  a. Number - flag : to monitor whether the user is clicking the first cell or second cell in any given pair </br>
  b. Set - clicks : to keep record of currently clicked cell</br>
  c. Set - correctClicks : to keep record of the correctly matched pairs</br>
  d. Number - correctCounter : to monitor the number of correct pairs found, initialize to 8</br>
  e. Array - alphabets : all the alphabets involved in the game</br>
  f. Number - fc : to store the ID of the cell clicked for first time in a pair</br>
  g. Number - sc : to store the ID of the cell clicked for second time in a pair</br>
  
3. When the page loads, call playgame() from javascript

4. Algorithm for playgame()</br>
  a. Shuffle the array of the alphabets using Fisher-Yates shuffling algorithm.</br>
  b. Add event-listener cellClick() upon a click on the grid.</br>

5. Algorithm for cellClick()</br>
  a. if flag is 1, call getFirstClick(e), else if flag is 0, call getSecondClick(e), where e is the event of a click</br>
  b. If text-content of cell sc and fc are same AND sc is not equal to fc AND correctClicks has not fc AND correctClicks has not sc:</br>
    1. Turn both cells to green.</br>
    2. Add sc and fc to correctClicks and delete sc and fc from clicks.</br>
    3. Decrement correctCounter by 1</br>
    4. If correctCounter is 0, remove the grid and call endGame()</br>
  c. Else If correctClicks has fc AND correctClicks has not sc:</br>
    1. Turn text-content of sc to 'X' and its colour back to white</br>
    2. Turn colour of fc to green</br>
    3. Delete sc and fc from clicks.</br>
  d. Else If correctClicks has sc AND correctClicks has not fc:</br>
    1. Turn text-content of fc to 'X' and its colour back to white</br>
    2. Turn colour of sc to green</br>
    3. Delete sc and fc from clicks.</br>
  e. Else If correctClicks has sc AND correctClicks has sc:</br>
    1. Turn both to green and delete sc and fc from clicks</br>
  f. Else</br>
    1. Turn both cells to white, and replace the text-content by 'X'</br>
    2. Delete sc and fc from clicks</br>
 
6. Algorithm for getFirstClick(e)</br>
  a. Store the id of the element using target of the event in variable fc</br>
  b. If clicks has fc or correctClicks has fc, decrement flag to 0, and return, otherwise continue</br>
  c. Add fc to clicks and decrement flag to 0.</br>
  d. Replace the text content of the cell fc with alphabets[fc-1]</br>
  e. Replace the colour of the cell with orange</br>
  
7. Algorithm for getSecondClick(e)</br>
  a. Store the id of the element using target of the event in variable sc</br>
  b. If clicks has sc or correctClicks has sc, increment flag to 1, and return, otherwise continue</br>
  c. Add sc to clicks and increment flag to 1.</br>
  d. Replace the text content of the cell sc with alphabets[sc-1]</br>
  e. Replace the colour of the cell with orange</br>
  
8. Algorithm for endGame()</br>
  a. Display congrats message </br>
  
9. If user clicks play-again button, call the playAgain() method with below algorithm:</br>
  a. Reset all the variables to default as they were in the beginning of the game</br>
  b. Create the grid again and write to HTML</br>
  c. Call playgame()

</br>
