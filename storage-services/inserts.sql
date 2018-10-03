INSERT INTO business ( contact_name , contact_number , contact_email) 
VALUES ('freded meat' , '085704553' , 'boogsBaloyi.com'); 

INSERT INTO location ( address ,  business_id) 
VALUES ('Riversands' , 1 ); 


INSERT INTO block ( name ,  location_id) 
VALUES ('block 1' , 1 ); 


INSERT INTO unit (name ,  block_id ,  unit_type_id) 
VALUES ('section 1' , 1 , 1 ); 


INSERT INTO unit_type (name ,length ,  width , height)
VALUES ('garage' , '45m' , 3, 7);

