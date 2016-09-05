# testando desenvolvimento de aplicações com o electron

repositório criado para agregar arquivos dos meus estudos relacionado ao Electron.

- evitar utilização de frameworks web. lembrar sempre que o Electron é voltado para aplicações desktop, então a abstração de soluções para web (como frameworks css) aqui não é tão útil.
- ao invés de utilizar framework web, vamos utilizar o [Photon](http://photonkit.com), uma solução para o Electron focada em estilizar componentes de acordo com o SO.
- instalamos o múdulo electron-reload, que monitora a alteração de arquivos e atualiza automaticamente nosso preview.
- sempre trabalhar layout com base no Phi, ou golden ratio. (width or height / 0.618)
- instalamos o handlebars para criamos templates.
- lembrar que o Electron opera sobre o NodeJS, ou seja, podemos utilizar as funcionalidades no NodeJS sem problemas.
- criamos o arquivo views.js para gerenciar as views do nosso template. arquivo com extensão .hbs, são os arquivos padrões do Handlebars.

todo código reproduzido neste repositório foi criado por [thierry rene matos / web developer](http://thierryrenewebdev.com)
