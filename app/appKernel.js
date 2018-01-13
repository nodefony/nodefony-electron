/*
 *  ENTRY POINT FRAMEWORK APP KERNEL
 */
"use strict;";
//const url = require('url');
const electron = require('electron');
const {
  app,
  BrowserWindow,
  ipcMain,
  Tray,
  nativeImage
} = require('electron');

module.exports = nodefony.register("appKernel", function () {
  const base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAklEQVR4AewaftIAAAJpSURBVIXBW0hTYRwA8P/3fedsa3NnjXnZRKmBJqaYL0JmlgSKIvakLyGW9FAQFRW9GWj6EF2hF03xoaUUPYxERg+6MgMVJwY5AzUk727ObbrtbDs7l56Cr4PZ74fgP/IalwgpTF6CrZ1iszWtbaqrLAUUBv5JgZL7k2dC0ma3QSTzEhN8MNVVlQIVBAdoaHuH58MZD/cRumLUmlvX9oZHqhjXWS7GzTodIzxQCKiYbs7gIEKv90XpXKZPqErX3ZZLj+18IOma0/4T4Yn14c1doGD4iwJZBr4zzOPzxsXpaktue4Ullxvf3Qj1emvL6r35nkVQIUCpb60u+iYnBgrMuMVm6zEZLBpnJM43RUu+LocClaP5gmzZeN/1BaAD/sBAmTWkrqYx7Oo243DpOe0LgtBbonct/QJpzBZHA9MxXQcAAhoGioRxGTYQT501lp2UEqWKyA4t2A3XMYboNqt/BC0I1DDQEEgyABaFhIgQAsQAgwmSZQVY5aiC4QAYKKwQnZCiQsXQWHFAQzSTkpRqyhlZegkiiMZI/JW9R2ZBBQPFHNH0JSTFbD1eczk+K90CUBoys+9U2owr5TILOSZr8im0K0AjQPF/fxMuqmkOr8TgseDX9XJZ28NEL/SbF5yhuYzpG+s/Gj9COwIaARW+7qTHlsxlgqac7mSgZlDPDj4BzF0rJPF79kDf1M+JVR9QCKgIbjcEy0+N52kNywEdcUQjFxG/d+EuB273Jhde8H3yy0BBcAjb4JZFNzPXKbNsHWPUPj8iWvq9HQU8UAgcIup8Fg/XOlx2fci56/FlZu+NLq95PyeA8htMDP0Zj+9+1QAAAABJRU5ErkJggg==';

  const appKernel = class appKernel extends nodefony.kernel {
    constructor(type, environment, debug, settings) {
      // kernel constructor
      try {
        super(environment, debug, type, settings);
        if (this.autoLoader.isElectron()) {
          this.app = electron.app;
          this.mainWindow = null;
          this.tray = null;
          this.icon = path.resolve(this.rootDir, "app", "electron", "images", "icons", "png", "1024.png");
          this.initializeElectron();
        }
      } catch (e) {
        throw e;
      }
    }
    initializeElectron() {
      this.on("onPostReady", () => {
        try {
          this.initializeTray();
          this.createMainWindow();
          this.mainWindow.loadURL('https://localhost:5152');
        } catch (e) {
          throw e;
        }
      });
      app.on('activate', () => {
        // On OS X it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (this.mainWindow === null) {
          this.createMainWindow();
          this.mainWindow.loadURL('https://localhost:5152');
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
          app.quit();
        }
      });

      app.on('browser-window-created', (e, window) => {
        this.logger("browser-window-created hide menu", "DEBUG");
        window.setMenu(null);
      });
    }

    initializeTray() {
      let icon = nativeImage.createFromDataURL(base64Icon);
      this.tray = new Tray(icon);
      this.tray.on('click', (event) => {
        // Show devtools when command clicked
        if (this.mainWindow.isVisible() && process.defaultApp && event.metaKey) {
          this.mainWindow.openDevTools();
        }
      });
    }

    createMainWindow() {
      this.mainWindow = new BrowserWindow({
        width: 1281,
        height: 800,
        minWidth: 1280,
        minHeight: 800,
        //backgroundColor: '#312450',
        icon: this.icon
        //frame: false
      });

      this.mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        this.mainWindow = null;
      });
    }

  };
  return appKernel;
});