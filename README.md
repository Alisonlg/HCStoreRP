# HCStoreRP

Este repositório contém um script projetado para integrar a loja hcrp.store ao seu servidor. Com este script, você pode configurar várias funcionalidades, como testes de veículos e requisições de integração com o site da loja.

## 🔧 Configuração

Antes de utilizar o script, é necessário fazer algumas configurações. Veja abaixo os detalhes:

| Categoria     | Variável   | Exemplo                             | Descrição                                               										            |
| ------------- | ---------- | ----------------------------------- | ------------------------------------------------------- 										            |
| `TestDrive`   | `ativo`    | "true"                              | Define se a função de test drive será utilizada         										            |
| `TestDrive`   | `pos`      | "vector3(-952.28, -3365.40, 13.94)" | Posição para teleportar o jogador para o test drive (/hcstore_getpos para obter a posição                  |
| `TestDrive`   | `heading`  | "58.0"                              | Direção da visão do jogador ao ser teleportado para o test drive (/hcstore_getpos para obter a posição)    |

```

['TestDrive'] = { 
    ativo = true, -- Define se a função de test drive será utilizada
    pos = vector3(-952.28, -3365.40, 13.94), -- Posição para teleportar o jogador para o test drive (/hcstore_getpos para obter a posição)
    heading = 58.00, -- Direção para a qual o jogador estará voltado ao ser teleportado para o test drive (/hcstore_getpos para obter a posição)
    distancia_permitida = 500.0, -- Distância máxima permitida para o jogador durante o test drive, a partir do ponto inicial
    timetest = 30, -- Tempo em segundos que o jogador terá para testar o veículo
},
	
['Requisicoes'] = {
    token_integracao = '', -- Token de integração, encontrado na dashboard do cliente na aba "Integrações"
    site_url = 'demo.hcrp.store', -- URL do seu site
    tempo = 1 -- Tempo entre requisições de ativação, em minutos
}
```

## 🔧 Download
<!-- BEGIN LATEST DOWNLOAD BUTTON -->
[![Download zip](https://custom-icon-badges.demolab.com/badge/-Download-purple?style=for-the-badge&logo=download&logoColor=white "Fazer download")](https://github.com/Alisonlg/HCStoreRP/archive/refs/heads/main.zip)
<!-- END LATEST DOWNLOAD BUTTON -->
