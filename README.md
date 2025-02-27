# grids

p5.js Grid Drawing Application
Overview

This project is an interactive grid-based drawing application built with p5.js. Users can draw on a grid by clicking and dragging, toggle between colors, and erase cells using keyboard controls.
Prerequisites

Before running this code, ensure you have:

    A web browser that supports JavaScript.
    The p5.js library. You can load it via CDN:

    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/p5.min.js"></script>

    Alternatively, you can use the p5.js web editor:
    https://editor.p5js.org/

How to Run

    Copy and paste the provided JavaScript code into a new p5.js project.
    Save the file as sketch.js.
    Open the HTML file in a browser or run it using the p5.js web editor.

Features

    Grid-Based Drawing: Click and drag to fill cells.
    Color Toggle: Press 'C' to switch between red and black.
    Erase Mode: Press 'U' to toggle erase mode, allowing users to remove drawn cells.

Code Structure
1. Grid Initialization (setup())

    The grid size adapts to the window.
    Cells are initialized with a default white color.

2. Rendering (draw())

    The grid updates based on user interactions.
    Each cell is checked for color and filled accordingly.

3. User Interaction

    mousePressed(): Colors a cell or erases it if erase mode is active.
    mouseDragged(): Allows continuous drawing or erasing.
    keyPressed(): Handles color toggling and erase mode activation.

Controls
Action	Key/Mouse
Draw a cell	Click on a cell
Draw continuously	Click and drag
Toggle color (Red/Black)	Press 'C'
Toggle erase mode	Press 'U'
Erase a cell	Click while erase mode is active
Customization

    Cell Size: Modify the CELLSIZE constant to adjust the grid resolution.
    Default Colors: Change the currentColor variable in setup() to set a different starting color.