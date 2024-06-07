Config = {}

Config.Main = {
    ['TestDrive'] = { 
        Ativo = true,
        Pos = vector3(-952.28, -3365.40, 13.94),
        Heading = 58.00,
        Distancia_permitida = 500.0,
        Timetest = 30 -- segundos
    },
    ['Requisicoes'] = {
        Token_integracao = '8jZgTn6Lp1Gx4Fq2Rv5Ws9Bc3Vy0Xm7N',
        Site_url = 'demo.hcrp.store',
        Tempo_ativacoes = 1, -- minutos
        Tempo_vencimentos = 1 -- minutos
    },
    ['Mensagens'] = {
        ['Tela'] = {
            Ativo = true,
            Titulo_ativo = true,
            Titulo_mensagem = 'Obrigado pela compra @player',
            SubTitulo_ativo = true,
            SubTitulo_mensagem = '@itens foram entregues'
        },
        ['Chat'] = {
            Ativo = true,
            Mensagem = '@player comprou @itens',
            Background_html = '<br><div style="background: #B622B5FF; color: #fff; padding: 10px; border-radius: 10px; text-align: center; width:50%; font-weight: bold" margin: 10px 0;><b>{0}</b></div><br>'
        },
        ['Erros'] = {
            TestDrive_emteste = 'Você já está testando um carro',
            TestDrive_saiuarea = 'Você saiu da área de testdrive'
        }
    },
    ['Blips'] = {
        ['TestDrive'] = {
            ['IconMap'] = {
                Ativo = true,
                Type = 326,
                Pos = vector3(-29.69178, -1105.017, 26.42236),
                Colour = 5,
                Size = 0.5,
                Title = 'Test Drive'
            },
            ['DrawMarker'] = {
                Ativo = true,
                Category = 'TestDrive',
                Type = 36,
                Pos = vector3(-29.69178, -1105.017, 26.42236),
                Colour = '#F3FF00',
                Opacity = 100,
                Size = 0.5,
                Rotate = true,
                UpDown = true,
                Distance_Show = 10,
                Distance_Use = 2
            }
        },
        ['Website'] = {
            ['IconMap'] = {
                Ativo = true,
                Type = 59,
                Pos = vector3(159.343, -987.2985, 30.09191),
                Colour = 5,
                Size = 0.5,
                Title = 'Loja do servidor'
            },
            ['DrawMarker'] = {
                Ativo = true,
                Category = 'Website',
                Type = 29,
                Pos = vector3(159.343, -987.2985, 30.09191),
                Colour = '#F3FF00',
                Opacity = 100,
                Size = 0.5,
                Rotate = true,
                UpDown = true,
                Distance_Show = 10,
                Distance_Use = 2
            }
        }, 
        ['Website_Ground'] = {
            ['IconMap'] = {
                Ativo = false,
                Type = 59,
                Pos = vector3(-38.44158, -1102.13, 26.42235),
                Colour = 5,
                Size = 0.5,
                Title = 'Loja do servidor'
            },
            ['DrawMarker'] = {
                Ativo = true,
                Category = 'none',
                Type = 25,
                Pos = vector3(159.344, -987.2985, 29.1),
                Colour = '#F3FF00',
                Opacity = 100,
                Size = 0.8,
                Rotate = false,
                UpDown = false,
                Distance_Show = 10,
                Distance_Use = 2
            }
        }
    }
}