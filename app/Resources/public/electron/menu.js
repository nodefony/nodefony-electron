/*
 */
const {
  remote,
  BrowserWindow,
  ipcRenderer
} = require('electron');
const {
  app,
  Menu,
  MenuItem,
  ipcMain
} = remote;

const menuContext = new Menu();
menuContext.append(new MenuItem({
  label: 'toogle Dev',
  click: () => {
    remote.getCurrentWindow().toggleDevTools();
  }
}));
menuContext.append(new MenuItem({
  type: 'separator'
}));
menuContext.append(new MenuItem({
  label: 'Reload',
  click: () => {
    remote.getCurrentWindow().reload();
  }
}));

window.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  menuContext.popup(remote.getCurrentWindow());
}, false);

document.addEventListener('DOMContentLoaded', () => {
  /*let n = new Notification('You did it!', {
    body: 'Nice work.'
  })

  // Tell the notification to show the menubar popup window on click
  n.onclick = () => {
    ipcRenderer.send('show-window');
  };*/

});

const menuTemplate = [{
  label: 'nodefony',
  submenu: [{
    label: 'devtools',
    click: () => {
      remote.getCurrentWindow().toggleDevTools();
    }
  }, {
    label: 'About Nodefony',
    click: () => {
      console.log('About Clicked');
    }
  }, {
    type: 'separator'
  }, {
    label: 'Quit',
    click: () => {
      app.quit();
    }
  }]
}, {
  label: 'demo',
  submenu: [{
    label: 'Angular Demo',
    click: () => {
      remote.getCurrentWindow().loadURL('https://localhost:5152/angular');
    }
  }, {
    label: 'Nodefony Demo',
    click: () => {
      remote.getCurrentWindow().loadURL('https://localhost:5152');
    }
  }]
}];
const menu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menu);