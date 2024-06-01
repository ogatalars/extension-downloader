# YouTube Video Downloader Extension

## Descrição

Esta extensão do Chrome permite baixar vídeos do YouTube diretamente do navegador. Ela inclui uma interface simples em React e um servidor backend em Flask para lidar com as solicitações de download.

## Requisitos

- Node.js
- Python 3
- pip (Python package installer)
- Chrome

## Configuração

### Frontend

1. Instale as dependências do Node.js:

    ```sh
    npm install
    ```

2. Compile o projeto:

    ```sh
    npm run build
    ```

3. Carregue a extensão no Chrome:

    - Abra o Chrome e vá para `chrome://extensions/`.
    - Ative o "Modo de desenvolvedor".
    - Clique em "Carregar sem compactação" e selecione a pasta `build/extension`.

### Backend

1. Configure um ambiente virtual Python:

    ```sh
    python -m venv venv
    ```

2. Ative o ambiente virtual:

    No Windows:

    ```sh
    venv\Scripts\activate
    ```

    No MacOS/Linux:

    ```sh
    source venv/bin/activate
    ```

3. Instale as dependências do Python:

    ```sh
    pip install Flask pytube
    ```

4. Inicie o servidor Flask:

    ```sh
    python server/server.py
    ```

## Uso

1. Abra o Chrome e clique no ícone da extensão.
2. Insira o link do vídeo do YouTube e clique em "Download".
3. O vídeo será baixado usando o servidor Flask.

## Estrutura do Projeto

