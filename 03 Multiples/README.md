# 03 MULTIPLES - Chess Board
I chose a chess board so I could experiment with both arrays and iteration in a cohesive manner. 

Using 2 FOR loops, I created the board by making 8 rows of 8 squares - changing the colourCheck variable each square so the colours would alternate from black and white by checking whether colourCheck is divisible by 2 and branching off with an IF statement.
I used an array of letters and numbers for me to add the chess notation to each space. Additionally, I used a 2D array to store whether each square was full or not.

To make the pieces, I made it so when the mouse is clicked, it triggers the code to make a piece one time. I used a WHILE loop to find what square the mouse is in when clicked by checking its X and Y coordinates against the sides of the squares. 
I had to also add a piece of code to check the mouse was within the board, as it would crash on the loop if it wasn't.