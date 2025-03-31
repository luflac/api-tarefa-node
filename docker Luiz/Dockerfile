# imagem Node
FROM node:18-alpine

# diretorio do container
WORKDIR /app

# Enviando arquivos json
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando o restante do código pro container
COPY . .

# Porta que a Api vai rodar
EXPOSE 3000

# Comando para Rodar
CMD ["npm", "run", "dev"]