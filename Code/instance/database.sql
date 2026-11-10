CREATE TABLE IF NOT EXISTS medicos (
    cedulapro SERIAL NOT NULL,
    nome VARCHAR(150),
    contacto VARCHAR(150),
    email VARCHAR(150),
    password_hash VARCHAR(300),
    PRIMARY KEY (cedulapro),
    UNIQUE (email)
);

CREATE TABLE IF NOT EXISTS utentes (
    numutente SERIAL NOT NULL,
    nome VARCHAR(150),
    nascimento VARCHAR(150),
    sexo CHAR(5),
    nic VARCHAR(150),
    morada VARCHAR(150),
    contacto VARCHAR(150),
    email VARCHAR(150),
    PRIMARY KEY (numutente),
    UNIQUE (email)
);

CREATE TABLE IF NOT EXISTS previsoes (
    id SERIAL NOT NULL,
    numutente INTEGER NOT NULL,
    previsao VARCHAR(150),
    data_previsao DATE,
    PRIMARY KEY (id),
    FOREIGN KEY (numutente) REFERENCES utentes (numutente) ON UPDATE CASCADE ON DELETE CASCADE
);
