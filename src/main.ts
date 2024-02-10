const rpc = require("discord-rpc")
const client = new rpc.Client({transport: 'ipc'})
const axios = require('axios');
let firstButton: string, secondButton: string

Promise.all([axios.get('https://raw.githubusercontent.com/Devollox/Devollox/main/config.json')])
    .then(function (result) {
        const JSON = result[0].data

        function getElement() {
            client.request('SET_ACTIVITY', {
                pid: process.pid,
                activity: {
                    details: `${JSON.objectDetails[Math.floor(Math.random() * JSON.objectDetails.length)]}/${JSON.objectState[Math.floor(Math.random() * JSON.objectState.length)]}`,
                    state: `Line: ${Math.floor(Math.random() * 40)}/${Math.floor(Math.random() * 20)} ${Math.floor(Math.random() * 20) + 13}.${Math.floor(Math.random() * 40) + 26}kb`,
                    assets: {
                        large_image: `${JSON.large_image}`,
                        large_text: `Fuck off ${JSON.objectSmallText[Math.floor(Math.random() * JSON.objectSmallText.length)]}`,
                        small_image: `${JSON.small_image}`,
                        small_text: `${JSON.objectSmallText[Math.floor(Math.random() * JSON.objectSmallText.length)]}`,
                    },
                    timestamps: {
                        start: Math.floor(Math.random() * JSON.timestamps.start),
                    },
                    buttons: [
                        {
                            label: `${firstButton}`,
                            url: `${secondButton}`
                        },
                        {
                            label: `${JSON.buttonSecond.firstButton}`,
                            url: `${JSON.buttonSecond.secondButton}`
                        },
                    ]
                }
            })
        }

        client.on('ready', async () => {
            getElement()

            setInterval(() => {
                getElement()
            }, 3 * 1000)

            setInterval(() => {
                if (firstButton === "My WebSite." || firstButton === JSON.buttonFirst.second.firstButton) {
                    firstButton = JSON.buttonFirst.first.firstButton
                    secondButton = JSON.buttonFirst.first.secondButton
                    return {firstButton, secondButton}
                } else {
                    firstButton = JSON.buttonFirst.second.firstButton
                    secondButton = JSON.buttonFirst.second.secondButton
                    return {firstButton, secondButton}
                }
            }, 6000)

        })
        client.login({clientId: JSON.token}).catch(console.error);
    })


import {app, BrowserWindow} from 'electron';
import path from 'path';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
    app.quit();
}

const createWindow = () => {
    // Create the browser window.
    // @ts-ignore
    const mainWindow = new BrowserWindow({
        width: 470,
        height: 180,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegrationInWorker: true,
            devTools: false,
        },
    });
    mainWindow.setMenuBarVisibility(false)


    if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
        mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
    } else {
        mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
    }

    mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
