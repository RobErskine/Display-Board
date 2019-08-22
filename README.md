# Display Board

## What is this?
A simple display board to run on a remote display on your network. Easily control the remote display using a web browser on your local computer through the power of web sockets.

- Display a message on a green, yellow, or red background
- Display an image that covers or tiles the display
- Display a video that silently loops on repeat

## How do i set this up?
1. clone the repo
2. run npm install
3. set up a vhost that points to the html/ directory
4. in gulp/init.js, replace with your correct URL

## todo
- add in express web server to remove the need to set up a vhost