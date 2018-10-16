CREATE TABLE IF NOT EXISTS business (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    contact_number varchar(25) NOT NULL UNIQUE,
    contact_email varchar(255) NOT NULL UNIQUE,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);                                                                                                                                                                                                                                                                                                                                                                                                                


CREATE TABLE IF NOT EXISTS location (
    id serial PRIMARY KEY,
    city varchar(255) NOT NULL,
    state varchar(255) NOT NULL,
    street varchar(255) NOT NULL,
    business_id INT REFERENCES business(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);


CREATE TABLE IF NOT EXISTS block (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    location_id INT REFERENCES location(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);


CREATE TABLE IF NOT EXISTS unit_type (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    length DECIMAL(18,4) NOT NULL,
    width DECIMAL(18,4) NOT NULL,
    height DECIMAL(18,4) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);


CREATE TABLE IF NOT EXISTS unit (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    block_id INT REFERENCES block(id) NOT NULL,
    unit_type_id INT REFERENCES unit_type(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);


