First attempt to connect via web socket to TCP socket.

Currently creates the Viz socket and web socket and just passes some pre set commands over.

Simple web page to show a few buttons.

==================

Install node
Run 'npm install' to load all required modules

Check IP address for Viz, in the config.js file

Run 'node viz' to get command prompt
Command on the console,
  v -> request version, should get a reply from Viz
  r -> toggle replies mode
  q -> toggle quiet mode
  d, e close the port (testing only)
  quit -> close, y to confirm

  anything else is sent as a command

Web page
  Browse to localhost:7788   (check the port set in the config.js file)

  Should see a few buttons for basic test commands.
  
  Some buttons added to test election scene
   