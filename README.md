# HCStoreRP

Este repositório contém um script projetado para integrar a loja hcrp.store ao seu servidor. Com este script, você pode configurar várias funcionalidades, como testes de veículos e requisições de integração com o site da loja.

## 📥 Download

Clique no botão abaixo para baixar o script:

<!-- BEGIN LATEST DOWNLOAD BUTTON -->
[![Baixar Script](https://custom-icon-badges.demolab.com/badge/-Download-purple?style=for-the-badge&logo=download&logoColor=white)](https://github.com/Alisonlg/HCStoreRP/archive/refs/heads/main.zip)
<!-- END LATEST DOWNLOAD BUTTON -->

## ⚙️ Comandos

| Comando                    | Permissão VRP 	       	  | Grupo ESX 	       	  | Descrição                                                                                  |
| -------------------------- | -------------------------- | --------------------- | ------------------------------------------------------------------------------------------ |
| `hcstore_getpos`           | hcstore.getpos  	          | admin			  	  | Comando exibe a posição e heading atual do player no console(auxilio para configuração)    |
| `hcstore_updatecategorys`  | hcstore.updatecategorys    | admin			  	  | Comando atualiza instantaneamente as categorias e carros do testdrive                      |
| `testdrive`                | não possui                 | não possui			  | Comando exibe menu em tela para seleção de carro em testdrive                              |

## 🔧 Configuração

Antes de utilizar o script, é necessário fazer algumas configurações. Veja abaixo os detalhes:

| Categoria        			   | Variável   			 | Exemplo                             | Descrição                                               										            |
| ---------------------------- | ----------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `Geral`          			   | `Framework` 			 | "VRP"                               | Define o framework utilizado no servidor(VRP/VRPEX/ESX)        										    |
| `TestDrive`      			   | `Ativo`    			 | "true"                              | Define se a função de test drive será utilizada         										            |
| `TestDrive`      			   | `Pos`      		     | "vector3(-952.28, -3365.40, 13.94)" | Posição para teleportar o jogador para o test drive (/hcstore_getpos para obter a posição)                 |
| `TestDrive`      			   | `Heading`  			 | "58.0"                              | Direção da visão do jogador ao ser teleportado para o test drive (/hcstore_getpos para obter a posição)    |
| `TestDrive`      			   | `Distancia_permitida`   | "500.0"                             | Distância máxima permitida para o jogador durante o test drive, a partir do ponto inicial                  |
| `TestDrive`      			   | `Timetest`  			 | "30"                                | Tempo em segundos que o jogador terá para testar o veículo                                                 |
| `Requisicoes`    			   | `Token_integracao`      | "z3rA8tW1p2BxQ6fU7l9I0mJ4o5LcV3kY"  | Token de integração, encontrado na dashboard do cliente na aba "Integrações"                               |
| `Requisicoes`    			   | `Site_url`              | "demo.hcrp.store"                   | URL do site em nossa loja                                                                                  |
| `Requisicoes`    			   | `Tempo_ativacoes`       | "1"                                 | Tempo entre requisições de ativação, em minutos                                                            |
| `Requisicoes`    			   | `Tempo_vencimentos`     | "1"                                 | Tempo entre requisições de vencimento, em minutos                                                          |
| `Mensagens.Tela` 			   | `Ativo`                 | "true"                              | Define se a mensagem em tela será exibida                                                                  |
| `Mensagens.Tela` 			   | `Titulo_ativo`          | "true"                              | Define se o titulo da mensagem em tela será exibida                                                        |
| `Mensagens.Tela` 			   | `Titulo_mensagem`       | "Obrigado pela compra @player"      | Define o titulo que será exibido (@player = player comprador/@itens = itens comprados)           	        |
| `Mensagens.Tela` 			   | `SubTitulo_ativo`       | "true"                              | Define se o subtitulo da mensagem em tela será exibida                                                     |
| `Mensagens.Tela` 			   | `SubTitulo_mensagem`    | "@itens foram entregues"            | Define o subtitulo que será exibido (@player = player comprador/@itens = itens comprados)                  |
| `Mensagens.Chat` 			   | `Ativo`                 | "true"                              | Define se a mensagem em chat será exibida                                                                  |
| `Mensagens.Chat` 			   | `Mensagem`              | "@player comprou @itens"            | Define a mensagem em que será exibida em chat (@player = player comprador/@itens = itens comprados)        |
| `Mensagens.Chat` 			   | `Background_html`       | "<b>{0}</b>"                        | Define o layout da mensagem que será enviada, deve ser feito em html ({0} = mensagem enviada)              |
| `Blips.TestDrive.IconMap`    | `Ativo`      			 | "true"                        	   | Define se o icone será exibido no mapa               														|
| `Blips.TestDrive.IconMap`    | `Type`      			 | "326"                        	   | Define o icone que será exibido (https://docs.fivem.net/docs/game-references/blips/)              			|
| `Blips.TestDrive.IconMap`    | `Pos`      			 | "vector3(-29.69, -1105.01, 26.42)"  | Define a posição do icone no mapa (/hcstore_getpos para obter a posição)              						|
| `Blips.TestDrive.IconMap`    | `Colour`      		     | "5"                        		   | Define a cor do icone no mapa (https://docs.fivem.net/docs/game-references/blips/) 			            |
| `Blips.TestDrive.IconMap`    | `Size`      			 | "0.5"                        	   | Define o tamanho do icone no mapa              															|
| `Blips.TestDrive.IconMap`	   | `Title`      			 | "Test Drive"                        | Define o título do icone no mapa              																|
| `Blips.TestDrive.DrawMarker` | `Ativo`      			 | "true"                        	   | Define se o blip será exibido              														        |
| `Blips.TestDrive.DrawMarker` | `Category`      		 | "TestDrive"                     	   | Define qual ação o blip fará (TestDrive/Website/none)            											|
| `Blips.TestDrive.DrawMarker` | `Type`      			 | "29"                        	       | Define o tipo do blip (https://docs.fivem.net/docs/game-references/markers/)               			    |
| `Blips.TestDrive.DrawMarker` | `Pos`      			 | "vector3(-29.69, -1105.01, 26.42)"  | Define a posição do blip no mapa (/hcstore_getpos para obter a posição)               						|
| `Blips.TestDrive.DrawMarker` | `Colour`      			 | "#F3FF00"                           | Define a cor do blip (https://htmlcolorcodes.com/color-picker/)              								|
| `Blips.TestDrive.DrawMarker` | `Opacity`      		 | "100"                        	   | Define a opacidade do blip               														            |
| `Blips.TestDrive.DrawMarker` | `Size`      			 | "0.5"                        	   | Define o tamanho do blip               																	|
| `Blips.TestDrive.DrawMarker` | `Rotate`      			 | "true"                        	   | Define se o blip fará uma animação de rotação               												|
| `Blips.TestDrive.DrawMarker` | `UpDown`      			 | "true"                        	   | Define se o blip fará uma animação de subida e descida              										|
| `Blips.TestDrive.DrawMarker` | `Distance_Show`      	 | "10"                        	   	   | Define a distancia em que o blip será exibido para o player      											|
| `Blips.TestDrive.DrawMarker` | `Distance_Use`      	 | "2"                        	   	   | Define a distancia em que será possível interagir com o blip      											|

## 📦 Dependencias

| Framework      | Dependencia   		   | Download                             								   |
| -------------- | ----------------------- | --------------------------------------------------------------------- |
| `VRP`          | `GHMattiMySQL` 		   | https://github.com/FrazzIe/ghmattimysql                               |
| `ESX`          | `OXMysql`	 		   | https://github.com/overextended/oxmysql                               |

## 🔄 Atualizações

<details>
  <summary><b>Versão 1.2024.2</b></summary>
  • Adicionada a opção de framework VRPEX<br>
  • Adicionada função para comandos de expiração<br>
  • Adicionada mensagem em tela do player ao ativar produto<br>
  • Adicionada personalização de mensagem de ativação em chat<br>
  • Adicionada opções de personalização de mensagens em arquivo de configuração
</details>
<details>
  <summary><b>Versão 1.2024.3</b></summary>
  • Adicionada a opção de framework ESX<br>
  • Adicionada função de blips e icones em mapa<br>
  • Adicionado menu Website, onde será possível abrir a loja por dentro do servidor<br>
</details>
