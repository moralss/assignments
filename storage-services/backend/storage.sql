CREATE TABLE IF NOT EXISTS business_owners (
    id serial PRIMARY KEY,
    email varchar(255) NOT NULL UNIQUE,
    hashed_password varchar(225) NOT NULL UNIQUE,
    user_name varchar(22) NOT NULL UNIQUE,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);                                                                                                                                                                                                                                                                                                                                                                                                                


CREATE TABLE IF NOT EXISTS businesses (
    id serial PRIMARY KEY,
    business_name varchar(255) NOT NULL UNIQUE,
    contact_number varchar(25) NOT NULL,
    contact_email varchar(255) NOT NULL ,
    business_owner_id INT REFERENCES business_owners(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);                                                                                                                                                                                                                                                                                                                                                                                                                


CREATE TABLE IF NOT EXISTS locations (
    id serial PRIMARY KEY,
    province varchar(25) NOT NULL,
    city varchar(255) NOT NULL,
    state varchar(255) NOT NULL,
    street varchar(255) NOT NULL,
    business_id INT REFERENCES businesses(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);


CREATE TABLE IF NOT EXISTS blocks (
    id serial PRIMARY KEY,
    block_name varchar(255) NOT NULL,
    location_id INT REFERENCES locations(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);


CREATE TABLE IF NOT EXISTS unit_types (
    id serial PRIMARY KEY,
    unit_type_name varchar(255) NOT NULL,
    length DECIMAL(18,2) NOT NULL,
    width DECIMAL(18,2) NOT NULL,
    height DECIMAL(18,2) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);


CREATE TABLE IF NOT EXISTS units (
    id serial PRIMARY KEY,
    unit_name varchar(255) NOT NULL,
    block_id INT REFERENCES blocks(id) NOT NULL,
    unit_type_id INT REFERENCES unit_types(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS customers (
    id serial PRIMARY KEY,
    email varchar(255) NOT NULL UNIQUE,
    hashed_password varchar(225) NOT NULL UNIQUE,
    user_name varchar(22) NOT NULL UNIQUE,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);                                                                                                                                                                                                                                                                                                                                                                                                                

CREATE TABLE IF NOT EXISTS customer_purchases (
    id serial PRIMARY KEY,
    customer_id INT REFERENCES customers(id) NOT NULL,
    unit_id INT REFERENCES units(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);                                                                                                                                                                                                                                                                                                                                                                                                                

