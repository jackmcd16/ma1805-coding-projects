# 02 MOVEMENT - Sunset
I was inspired by the moving aspects of the example code, especially movements correlating with the mouse's position. So I created a sunset that reacts to your mouse's Y coordinates.

There are several changing aspects, namely the sun position and the colours of the entire scene. To make the sun follow the mouse without having it touch the top or bottom, I changed the Y value into a percentage and made the sun follow that percentage on a shorter path.

The sky gradient is made of 5 ellipses, each a different colour and opacity. I made it fill the screen more by having the vertical radius equal the mouse's Y value, with all of them beginning from the very bottom of the canvas. 

To have natural gradients in the sky and water, I made it so the colours of them were variables that determine the RGB values by the position of the mouse. I used an external colour palette generator to select my desired colours and learn their RGB values.
