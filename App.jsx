<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha primeira página React</title>

    <style>
        #app {
            background-color: #232323;
            color: white;
            display: grid;
            font-family: sans-serif;
            height: 100vh;
            place-content: center;
        }
    </style>
</head>
<body>
    <!-- Ponto de partida, precisamos somente dessa div, o elemento pai -->
    <div id="app"></div>

    <!-- React via CDN, forma não recomendada -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script>
        const { createElement } = React

        const appDiv = document.getElementById('app')
        // Criando a raíz da nossa página para começar o desenvolvimento, indicando qual é a div que devemos selecionar para se tornar a raíz de tudo
        const root = ReactDOM.createRoot(appDiv)

        // Criando componentes: tag, argumentos, conteúdo interno/filhos
        const h1 = createElement('h1', {}, 'Olá mundo!')
        const p = createElement('p', {}, 'Estamos usando React!')
        const main = createElement('main', {}, h1, p)

        // Método para renderizar tudo, mostrar na tela
        root.render(main)

        // Ver depois como aparecer no inspecionar do navegador
    </script>
</body>
</html>
