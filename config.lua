Config = {}

Config.Main = {
    ['Geral'] = { 
        framework = 'VRP'
    },
    ['TestDrive'] = { 
        ativo = true,
        pos = vector3(-952.28, -3365.40, 13.94),
        heading = 58.00,
        distancia_permitida = 500.0,
        timetest = 30 -- segundos
    },
    ['Requisicoes'] = {
        token_integracao = 'WGuKFbte4apw2A7X5u0i2bQRdLN2MU', 
        site_url = 'demo.hcrp.store',
        tempo_ativacoes = 1, -- minutos
        tempo_vencimentos = 1 -- minutos
    },
    ['Mensagens'] = {
        ['Tela'] = {
            ativo = true,
            Titulo_ativo = true,
            Titulo_mensagem = 'Obrigado pela compra @player',
            SubTitulo_ativo = true,
            SubTitulo_mensagem = '@itens foram entregues'
        },
        ['Chat'] = {
            ativo = true,
            Mensagem = '@player comprou @itens',
            Background_html = '<br><div style="background: #B622B5FF; color: #fff; padding: 10px; border-radius: 10px; text-align: center; width:50%; font-weight: bold" margin: 10px 0;><b>{0}</b></div><br>'
        }
    }
}