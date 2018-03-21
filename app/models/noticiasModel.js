module.exports = function(){

    this.getNoticias = function(connection,callback){
        connection.query('Select * from noticias',callback);
    }

    this.getNoticia = function(connection,callback){
        connection.query('Select * from noticias where id_noticia = 2',callback);
    }

    this.salvarNoticia = function(noticia,connection,callback){
        // em vez de escrever insert into noticias(..)values(..)
        // coloca-se o set ?, onde o sinal ? é substituido pelos valores do json passado em seguida
        // é necessario que o json possua como rotulo das variaveis o mesmo nome que as colunas da tabela
        connection.query('insert into noticias set ?',noticia,callback);
    }

    return this;
}