pool.query('CREATE TABLE User (' +
       'id int(11) NOT NULL AUTO_INCREMENT,' +
       'user_name varchar(255) NOT NULL,' +
       'role varchar(255) default "employee",' +
       'email varchar(255) NOT NULL,' +
       'password varchar(255) NOT NULL,' +
       'PRIMARY KEY (id),'+
       'UNIQUE KEY email_UNIQUE (email),' +
       'UNIQUE KEY password_UNIQUE (password))', function (err, result) {
           if (err) throw err;
           console.log("User created");
         }
      );

    CREATE TABLE User4jwt (
       id int(11) NOT NULL AUTO_INCREMENT,
       user_name varchar(255) NOT NULL,
       role varchar(255) default "employee",
       email varchar(255) NOT NULL,
       password varchar(255) NOT NULL,
       PRIMARY KEY (id)
       UNIQUE KEY email_UNIQUE (email),
       UNIQUE KEY password_UNIQUE (password)
       )