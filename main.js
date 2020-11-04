// add electron to requirements
const { app, BrowserWindow } = require('electron')

// detects OSTheme to set dark or light mode
const setOSTheme = () => {
    let theme = systemPreferences.isDarkMode() ? 'dark' : 'light'
    window.localStorage.os_theme = theme

    if ('__setTheme' in window) {
      window.__setTheme()
    }
}

// main app logic and functions
app.on('ready', () => {

    const window = new BrowserWindow({  width: 1280,
                                        height: 720,
                                        title: 'Massive Decks',
                                        icon: 'resources/icon.png'
                                    })

    window.setMenuBarVisibility(null)

    window.loadURL('https://md.rereadgames.com/')
})

app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) 
    createWindow()
})

// closes app-window on macOS correctly
app.on('window-all-closed', () => {
    if (process.platform != 'darwin'){
        app.quit()
    }
})