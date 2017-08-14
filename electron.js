const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
// nodefony
const nodefony = require("nodefony");

const type  = "SERVER";
const environment = "development";
const debug = true ;
const kernel = null ;

app.on('ready', () => {
  try {
    kernel = new nodefony.appKernel(type, environment, debug,  {});
  }catch(e){
    throw e ;
  }
});

app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
  if (/https:\/\/localhost/g.test(url)) {
    // Verification logic.
    event.preventDefault();
    callback(true);
  } else {
    callback(false);
  }
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});
