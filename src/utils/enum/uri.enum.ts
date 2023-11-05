enum URI {
    USER = '/users',
    USER_REGISTER = '/user',
    USER_DELETE = '/user',
    USER_UPDATE = '/user',
    USER_LOGIN = '/user/login',
    PESQUISA_PLN = '/pesquisa/',
    CLASSIFICACAO_TEMA_CONTAGEM = '/getClassificacaoTemaEContagem',
    CLASSIFICACAO_TEMA_TEMPO = '/getClassificacaoTemaTempo',
    CLASSIFICACAO_TEMA_SENTIMENTO = '/getClassificacaoTemaSentimento',
    CLASSIFICACAO_TEMA_SENTIMENTO_ESTADO = '/getClassificacaoTemaSentimentoEstado',
    DISTRIBUICAO_SENTIMENTOS_FAIXA_ETARIA_TEMA = '/getDistribuicaoSentimentosFaixaEtariaTema',
    CATEGORIA_TEMAS = '/get-categoria-temas',
    MEDIA_TEMAS = '/get-media-temas',
    METRICAS = '/getMedicoes'
}

export default URI; 