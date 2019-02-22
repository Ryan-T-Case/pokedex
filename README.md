![](https://gametradersusa.com/wp-content/uploads/2016/08/pokedex1-890x606.gif)
demoDay
=======================

**Live Demo**: Coming Soon!

#What is the Pokedex app?


Table of Contents
-----------------

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [List of Packages](#list-of-packages)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Authors](#authors)

Features
--------

- **To be determined**

Prerequisites
-------------

- [MongoDB](https://www.mongodb.org/downloads)
- [Node.js 8.0+](http://nodejs.org)
- Command Line Tools
 - <img src="http://deluge-torrent.org/images/apple-logo.gif" height="17">&nbsp;**Mac OS X:** [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) (or **OS X 10.9+**: `xcode-select --install`)
 - <img src="http://dc942d419843af05523b-ff74ae13537a01be6cfec5927837dcfe.r14.cf1.rackcdn.com/wp-content/uploads/windows-8-50x50.jpg" height="17">&nbsp;**Windows:** [Visual Studio](https://www.visualstudio.com/products/visual-studio-community-vs) OR [Visaul Studio Code](https://code.visualstudio.com) + [Windows Subsystem for Linux - Ubuntu](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone https://github.com/Nicholasangelo/Demo.git myproject

# Change directory
cd myproject

# Install yarn dependencies
yarn i

# Then simply start your app
yarn start
```

List of Packages
----------------

| Package                         | Description                                                             |
| ------------------------------- | ------------------------------------------------------------------------|
| axios                           | Promise based HTTP client for the browser and node.js                   |
| bcryptjs                        | Library for hashing and salting user passwords.                         |
| body-parser                     | Node.js body parsing middleware.                                        |
| express                         | Node.js web framework.                                                  |
| if-env                          | Simplify npm scripts with "if-env ... && npm run this || npm run that"  |                                 
| mongoose                        | MongoDB ODM.                                                            |
| react                           | React is a JavaScript library for building user interfaces.             |
| react-dom                       | React package for working with the DOM.                                 |
| react-dom                       | React package for working with routes                                   |
| react-scripts                   | Configuration and scripts for Create React App.                         |
| nexmo                           | SMS Messaging API                                                       |
| recharts                        | D3 and React based data visualization library                           |


Deployment
----------

Once you are ready to deploy your app, you will need to create an account with
a cloud platform to host it. These are not the only choices, but they are my top
picks. From my experience, **Heroku** is the easiest to get started with, it will
automatically restart your Node.js process when it crashes, zero-downtime
deployments and custom domain support on free accounts. Additionally, you can
create an account with **MongoDB Atlas** and then pick one of the *4* providers below.
Again, there are plenty of other choices and you are not limited to just the ones
listed below.

### 1-Step Deployment with Heroku

<img src="https://upload.wikimedia.org/wikipedia/en/a/a9/Heroku_logo.png" width="200">

- Download and install [Heroku Toolbelt](https://toolbelt.heroku.com/)
- In terminal, run `heroku login` and enter your Heroku credentials
- From *your app* directory run `heroku create`
- Run `heroku addons:create mongolab`.  This will set up the mLab add-on and configure the `MONGODB_URI` environment variable in your Heroku app for you.
- Lastly, do `git push heroku master`.  Done!

**Note:** To install Heroku add-ons your account must be verified.

Contributing
------------

If something is unclear, confusing, or needs to be refactored, please let us know.
Pull requests are always welcome, but due to the opinionated nature of this
project, we cannot accept every pull request. Please open an issue before
submitting a pull request.

Authors
-------

This application was developed in 2019 by Ryan Tyler Case.