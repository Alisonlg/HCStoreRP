# HCStoreRP

Este repositório contém um script projetado para integrar a loja hcrp.store ao seu servidor. Com este script, você pode configurar várias funcionalidades, como testes de veículos e requisições de integração com o site da loja.

## 📥 Download

Clique no botão abaixo para baixar o script:

<!-- BEGIN LATEST DOWNLOAD BUTTON -->
[![Baixar Script](https://custom-icon-badges.demolab.com/badge/-Download-purple?style=for-the-badge&logo=download&logoColor=white)](https://github.com/Alisonlg/HCStoreRP/archive/refs/heads/main.zip)
<!-- END LATEST DOWNLOAD BUTTON -->

## ⚙️ Comandos

| Comando                    | Permissão   		       	  | Descrição                                                                                  |
| -------------------------- | -------------------------- | ------------------------------------------------------------------------------------------ |
| `hcstore_getpos`           | hcstore.getpos  	          | Comando exibe a posição e heading atual do player no console(auxilio para configuração)    |
| `hcstore_updatecategorys`  | hcstore.updatecategorys    | Comando atualiza instantaneamente as categorias e carros do testdrive                      |
| `testdrive`                | não possui                 | Comando exibe menu em tela para seleção de carro em testdrive                              |

## 🔧 Configuração

Antes de utilizar o script, é necessário fazer algumas configurações. Veja abaixo os detalhes:

| Categoria        | Variável   			| Exemplo                             | Descrição                                               										           |
| ---------------- | ---------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `Geral`          | `framework` 			| "VRP"                               | Define o framework utilizado no servidor(VRP/VRPEX)        										           |
| `TestDrive`      | `ativo`    			| "true"                              | Define se a função de test drive será utilizada         										           |
| `TestDrive`      | `pos`      		    | "vector3(-952.28, -3365.40, 13.94)" | Posição para teleportar o jogador para o test drive (/hcstore_getpos para obter a posição)                 |
| `TestDrive`      | `heading`  			| "58.0"                              | Direção da visão do jogador ao ser teleportado para o test drive (/hcstore_getpos para obter a posição)    |
| `TestDrive`      | `distancia_permitida`  | "500.0"                             | Distância máxima permitida para o jogador durante o test drive, a partir do ponto inicial                  |
| `TestDrive`      | `timetest`  			| "30"                                | Tempo em segundos que o jogador terá para testar o veículo                                                 |
| `Requisicoes`    | `token_integracao`     | "z3rA8tW1p2BxQ6fU7l9I0mJ4o5LcV3kY"  | Token de integração, encontrado na dashboard do cliente na aba "Integrações"                               |
| `Requisicoes`    | `site_url`             | "demo.hcrp.store"                   | URL do site em nossa loja                                                                                  |
| `Requisicoes`    | `tempo`                | "1"                                 | Tempo entre requisições de ativação, em minutos                                                            |
| `Requisicoes`    | `tempo_vencimentos`    | "1"                                 | Tempo entre requisições de vencimento, em minutos                                                          |
| `Mensagens.Tela` | `ativo`                | "true"                              | Define se a mensagem em tela será exibida                                                                  |
| `Mensagens.Tela` | `Titulo_ativo`         | "true"                              | Define se o titulo da mensagem em tela será exibida                                                        |
| `Mensagens.Tela` | `Titulo_mensagem`      | "Obrigado pela compra @player"      | Define o titulo que será exibido (@player = player comprador/@itens = itens comprados)           	       |
| `Mensagens.Tela` | `SubTitulo_ativo`      | "true"                              | Define se o subtitulo da mensagem em tela será exibida                                                     |
| `Mensagens.Tela` | `SubTitulo_mensagem`   | "@itens foram entregues"            | Define o subtitulo que será exibido (@player = player comprador/@itens = itens comprados)                  |
| `Mensagens.Chat` | `ativo`                | "true"                              | Define se a mensagem em chat será exibida                                                                  |
| `Mensagens.Chat` | `Mensagem`             | "@player comprou @itens"            | Define a mensagem em que será exibida em chat (@player = player comprador/@itens = itens comprados)        |
| `Mensagens.Chat` | `Background_html`      | "<b>{0}</b>"                        | Define o layout da mensagem que será enviada, deve ser feito em html ({0} = mensagem enviada)              |

## 🔄 Atualizações

<details>
  <summary><b>Versão 1.1.0</b></summary>
  • Adicionada a opção de framework VRPEX<br>
  • Adicionada função para comandos de expiração<br>
  • Adicionada mensagem em tela do player ao ativar produto<br>
  • Adicionada personalização de mensagem de ativação em chat<br>
  • Adicionada opções de personalização de mensagens em arquivo de configuração
</details>
