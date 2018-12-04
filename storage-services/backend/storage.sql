CREATE TABLE IF NOT EXISTS business_owner (
    id serial PRIMARY KEY,
    email varchar(255) NOT NULL UNIQUE,
    hashed_password varchar(225) NOT NULL UNIQUE,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);                                                                                                                                                                                                                                                                                                                                                                                                                


CREATE TABLE IF NOT EXISTS business (
    id serial PRIMARY KEY,
    business_name varchar(255) NOT NULL UNIQUE,
    contact_number varchar(25) NOT NULL,
    contact_email varchar(255) NOT NULL UNIQUE,
    business_owner_id INT REFERENCES business_owner(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);                                                                                                                                                                                                                                                                                                                                                                                                                


CREATE TABLE IF NOT EXISTS location (
    id serial PRIMARY KEY,
    province varchar(25) NOT NULL,
    city varchar(255) NOT NULL,
    state varchar(255) NOT NULL,
    street varchar(255) NOT NULL,
    business_id INT REFERENCES business(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);


CREATE TABLE IF NOT EXISTS block (
    id serial PRIMARY KEY,
    block_name varchar(255) NOT NULL,
    location_id INT REFERENCES location(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);


CREATE TABLE IF NOT EXISTS unit_type (
    id serial PRIMARY KEY,
    unit_type_name varchar(255) NOT NULL,
    length DECIMAL(18,2) NOT NULL,
    width DECIMAL(18,2) NOT NULL,
    height DECIMAL(18,2) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);


CREATE TABLE IF NOT EXISTS unit (
    id serial PRIMARY KEY,
    unit_name varchar(255) NOT NULL,
    block_id INT REFERENCES block(id) NOT NULL,
    unit_type_id INT REFERENCES unit_type(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS customers (
    id serial PRIMARY KEY,
    email varchar(255) NOT NULL UNIQUE,
    hashed_password varchar(225) NOT NULL UNIQUE,
    customer_phone_numbers varchar(225) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);                                                                                                                                                                                                                                                                                                                                                                                                                

CREATE TABLE IF NOT EXISTS customer_purchase (
    id serial PRIMARY KEY,
    customer_id INT REFERENCES customers(id) NOT NULL,
    unit_id INT REFERENCES unit(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);                                                                                                                                                                                                                                                                                                                                                                                                                

