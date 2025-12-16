CREATE TABLE IF NOT EXISTS products (
    product_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT DEFAULT NULL,
    price DECIMAL(10, 2) NOT NULL,
    popularity INT DEFAULT 0,
    image_url VARCHAR(512),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    created_by VARCHAR(255) DEFAULT NULL,
    updated_at  TIMESTAMP   DEFAULT NULL,
    updated_by VARCHAR(255) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS contacts
(
    contact_id bigint auto_increment
        primary key,
    name       varchar(100)                          not null,
    email      varchar(100)                          not null,
    message    varchar(500)                          not null,
    phone      varchar(15)                           not null,
    created_at timestamp default current_timestamp() not null,
    created_by varchar(50)                           not null,
    updated_at timestamp default current_timestamp() not null on update current_timestamp(),
    updated_by varchar(50)                           DEFAULT NULL
);



