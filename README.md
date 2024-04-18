# HCStoreRP

Este repositório contém um script projetado para integrar a loja hcrp.store ao seu servidor. Com este script, você pode configurar várias funcionalidades, como testes de veículos e requisições de integração com o site da loja.

## 🔧 Configuração

Antes de utilizar o script, é necessário fazer algumas configurações. Veja abaixo os detalhes:

| Categoria     | Variável   			 | Exemplo                             | Descrição                                               										            |
| ------------- | ---------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `TestDrive`   | `ativo`    			 | "true"                              | Define se a função de test drive será utilizada         										            |
| `TestDrive`   | `pos`      		     | "vector3(-952.28, -3365.40, 13.94)" | Posição para teleportar o jogador para o test drive (/hcstore_getpos para obter a posição)                 |
| `TestDrive`   | `heading`  			 | "58.0"                              | Direção da visão do jogador ao ser teleportado para o test drive (/hcstore_getpos para obter a posição)    |
| `TestDrive`   | `distancia_permitida`  | "500.0"                             | Distância máxima permitida para o jogador durante o test drive, a partir do ponto inicial                  |
| `TestDrive`   | `timetest`  			 | "58.0"                              | Tempo em segundos que o jogador terá para testar o veículo                                                 |
| `Requisicoes` | `token_integracao`     | "ySgesnxutya4as"                    | Token de integração, encontrado na dashboard do cliente na aba "Integrações"                               |
| `Requisicoes` | `site_url`             | "demo.hcrp.store"                   | URL do site em nossa loja                                                                                  |
| `Requisicoes` | `timetest`             | "30"                                | Tempo em segundos que o jogador terá para testar o veículo                                                 |

## 📥 Download

Clique no botão abaixo para baixar o script:

<!-- BEGIN LATEST DOWNLOAD BUTTON -->
[![Baixar Script](https://img.shields.io/badge/-Download-purple?style=for-the-badge&logo=download&logoColor=white)](https://github.com/Alisonlg/HCStoreRP/archive/refs/heads/main.zip)
<!-- END LATEST DOWNLOAD BUTTON -->
