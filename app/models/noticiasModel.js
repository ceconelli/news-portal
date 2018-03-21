function Noticias(connection){
    this._connection = connection;
}

Noticias.prototype.getNoticias = function(callback){
    this._connection.query('Select * from noticias',callback);
}

Noticias.prototype.getNoticia = function(callback){
    this._connection.query('Select * from noticias where id_noticia = 2',callback);
}

Noticias.prototype.salvarNoticia = function(noticia,callback){
    // em vez de escrever insert into noticias(..)values(..)
    // coloca-se o set ?, onde o sinal ? é substituido pelos valores do json passado em seguida
    // é necessario que o json possua como rotulo das variaveis o mesmo nome que as colunas da tabela
    this._connection.query('insert into noticias set ?',noticia,callback);
}

module.exports = function(){
    return Noticias;
}