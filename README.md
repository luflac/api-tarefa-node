## API de Cadastro de Tarefa com Node.js
**Essa API permite cadastrar uma tarefa de forma simples, enviando um título.**  

## Rode o Docker  

1. Clone o repositório:  
```sh
  git clone https://github.com/luflac/api-tarefa-node.git
```

```sh
   cd api-tarefa-node
```

```sh
   cd "docker Luiz"
```

2. Construa a imagem:
   
```sh
   docker build -t luiz-api .
```

3. Execute o container:
   
 ```sh
   docker run -p 3000:3000 luiz-api
```


## 📌 Endpoints

🔹 POST /tarefas
```json
{
  "titulo": "",
}
```

🔹 GET /tarefas
