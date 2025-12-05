import path from 'path'
import { app, ipcMain } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'
import { exec } from 'child_process'

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  serve({ directory: 'app' })
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}

;(async () => {
  await app.whenReady()

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  if (isProd) {
    await mainWindow.loadURL('app://./home')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}/home`)
  }
})()

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('message', async (event, arg) => {
  event.reply('message', `${arg} World!`)
})

ipcMain.on('execute-cmd', async (event, command) => {
  exec(`start cmd /k "${command}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar comando: ${error.message}`)
      event.reply('execute-cmd-response', { error: error.message })
      return
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`)
    }
    console.log(`stdout: ${stdout}`)
    event.reply('execute-cmd-response', { stdout, stderr })
  })
})
