create table products (
    user_id serial primary key,
    product_name varchar(50),
    price integer,
    image_url varchar(200)
);