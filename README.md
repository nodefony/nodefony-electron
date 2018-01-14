# Nodefony  electron

Nodefony-electron merge Electron with  Nodefony full-stack web framework.  

Nodefony can be used to develop a complete solution to create a Electron application.

The Nodefony project is inspired by the PHP Symfony framework, a developer can find most of the concepts, configurations and patterns of Symfony framework.

Nodefony is not an exhaustive port of symfony !

Nodefony assimilates into the ecosystem of node.js with services like :
- Web servers (websocket(s), http(s)).
- Notion of real-time context in Action Controller (Websocket).
- Notion of synchronous or asynchronous execution in Action Controller (Promise).
- [WEBPACK](https://webpack.js.org/) Module bundler for assets management of application .
- [WATCHER](https://nodejs.org/docs/latest/api/fs.html#fs_fs_watch_filename_options_listener) node.js for auto reload-files in developement mode .
- [PM2](http://pm2.keymetrics.io/) Production Process Manager for Node.js .
- [Passport](http://passportjs.org/) Simple, unobtrusive authentication for Node.js .

Nodefony 3  adds the following functionality :
- [Angular](https://github.com/angular/angular-cli) Bundle Generator ( Now an Angular Project can be merge into a Nodefony Bundle )
- [SockJS](https://github.com/sockjs) Server ( Like WDS 'Webpack Dev Server' and HMR management )
- New cli Management (Command Line Interface )

Now in this version  3 Beta,  Nodefony is evolved to a stable version without major fundamental changes.

Evolution priorities up to the stable version will focus on robustness, unit testing, documentation and security.

#### Now nodefony is ported with ECMAScript 6 ( Class, Inheritance ).

You can follow Nodefony build on travis at **[https://travis-ci.org/nodefony/nodefony](https://travis-ci.org/nodefony/nodefony)**

##  **Resources for Newcomers**

#### -  **[Nodefony Demo](https://nodefony.net)**  
#### -  **[Nodefony Documentation](https://nodefony.net/documentation)**  
#### -  **[Nodefony Monitoring](https://nodefony.net/nodefony)**


#### Documentation in progress !!

# Nodefony-electron use electron-quick-start

**Clone and run for a quick way to see Electron in action.**

This is a minimal Electron application based on the [Quick Start Guide](http://electron.atom.io/docs/tutorial/quick-start) within the Electron documentation.

**Use this app along with the [Electron API Demos](http://electron.atom.io/#get-started) app for API code examples to help you get started.**

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `app/appKernel.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `app/Resources/views/index.html.twig` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](http://electron.atom.io/docs/tutorial/quick-start).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/nodefony/nodefony-electron.git
# Go into the repository
cd nodefony-electron
# Install dependencies
make build
# Run the app
npm start
```

## Resources for Learning Electron

- [electron.atom.io/docs](http://electron.atom.io/docs) - all of Electron's documentation
- [electron.atom.io/community/#boilerplates](http://electron.atom.io/community/#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
