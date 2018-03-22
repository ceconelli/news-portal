function Noticias(connection){
    this._connection = connection;
}

Noticias.prototype.getNoticias = function(callback){
    this._connection.query('Select * from noticias order by data_criacao desc',callback);
}

Noticias.prototype.getNoticia = function(id_noticia,callback){
    this._connection.query('Select * from noticias where id_noticia = ' + id_noticia.id_noticia,callback);
}

Noticias.prototype.salvarNoticia = function(noticia,callback){
    // em vez de escrever insert into noticias(..)values(..)
    // coloca-se o set ?, onde o sinal ? é substituido pelos valores do json passado em seguida
    // é necessario que o json possua como rotulo das variaveis o mesmo nome que as colunas da tabela
    this._connection.query('insert into noticias set ?',noticia,callback);
}

Noticias.prototype.get5UltimasNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc limit 5',callback);
}

module.exports = function(){
    return Noticias;
}