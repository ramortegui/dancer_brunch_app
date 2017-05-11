# dancer_brunch_app
Dancer app using brunch to compile assets.

This is a sample project of how to set up a dancer2 app with brunch.

Requires Dancer2 and node installed.

# use
1. Clone the repo
2. $cd dancer_brunch_app
3. $npm install
4. $plackup bin/app.psgi

In other terminal

5. brunch watch

6. In a browser go to: http://localhost:5000

7. The brunch config is looking for changes on view, app, 
you can make a change on the views and app directories,then voila!, autoreload.

8.  Also if you start the dancer app using Shotgun loader, the application will be 
recompiled on each change of your code.
  $plackup -L Shotgun bin/app.psgi
