const {app, BrowserWindow} = require('electron')

// referência global do objeto windows, se não existir, a janela pode ser encerrada após a utilização do objeto JavaScript
let win

function createWindow () {
  // criando a janela
  win = new BrowserWindow({width: 800, height: 600})

  // apontando a url a ser carregada onload
  win.loadURL(`file://${__dirname}/index.html`)

  // definimos que o devtools deve ser aberto ao criar a janela
  win.webContents.openDevTools()

  // ações relacionadas ao encerramento da aplicação
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// este método é utilizado para apresentar uma mensagem no console quando o electron terminar de carregar e estiver pronto para abrir a janela do app.
app.on('ready', _ => {
  console.log('ready e agora vai.')
})
app.on('ready', createWindow)

// Sair quando todas as janelas forem fechadas
app.on('window-all-closed', () => {
  console.log('aplicação encerrada.')
  // macOS_hack
  // On macOS it is common for applications and their menu bar to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // macOS_hack
  // On macOS it's common to re-create a window in the app when the dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})
