# gds-hdd-server

An API backend for the gds-hdd app.

### How to setup and run the files 

1. Clone the repository with `git clone https://github.com/nateph/gds-hdd-server.git`
2. cd into the directory and run `npm install` - this installs all dependencies found in the `package.json` folder
3. Run `npm run dev` in the terminal to start up the webpack development server that hosts the API server
4. The server should be hosted on localhost:3090 when it is started
5. This is only the server for the app (the user doesn't see it), the front end, "gds-hdd" communicates with it.
