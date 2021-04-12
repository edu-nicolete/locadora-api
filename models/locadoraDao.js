function listaFilmesDao(){

}

listaFilmesDao.prototype.filmes = [
        {
            id: 1,
            nome: 'Star Wars',
            categoria: 'Científico',
            disponibilidade: 'Disponível',
            idClienteAlugado: null
        },
        {
            id: 2,
            nome: 'Star Wars',
            categoria: 'Científico',
            disponibilidade: 'Alugado',
            dataDevolucao: '10/04/2021',
            idClienteAlugado: 1
        },
        {
            id: 3,
            nome: 'Star Wars',
            categoria: 'Científico',
            disponibilidade: 'Disponível',
            idClienteAlugado: null
        }
    ];

listaFilmesDao.prototype.usuarios = [
    {
        id: 1,
        nome: 'José',
        filmes: '4',
        cpf: '00000000000',
        dataNascimento: '12/02/1993',
        sexo: 'masculino',
        situacao: 'Ativo'
    },
    {
        id: 2,
        nome: 'Eduardo',
        filmes: '0',
        cpf: '00000000000',
        dataNascimento: '12/02/1993',
        sexo: 'masculino',
        situacao: 'Ativo'
    },
    {
        id: 3,
        nome: 'Augusto',
        filmes: '1',
        cpf: '00000000000',
        dataNascimento: '12/02/1993',
        sexo: 'masculino',
        situacao: 'Inativo'
    }
];

listaFilmesDao.prototype.historicoLocacao = [];




module.exports = function(){
    return listaFilmesDao;
}
