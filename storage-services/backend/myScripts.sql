-- 1
select * from blocks;
-- 2 

select unit_type.name , location.city , location.state , 
location.street , unit_type.height ,  unit_type.width ,
unit_type.length from business inner join  location on
business.id = location.business_id
inner join  block on location.id = block.location_id
inner join  unit on block.id = unit.block_id 
inner join  unit_type on  unit.unit_type_id = unit_type.id 
where unit_type.name = 'garage';

-- 3
select * from unit inner join unit_type on unit_type.id = unit.unit_type_id where unit_type.name = 'garage';

--4 
select * from business inner join  location on business.id = location.business_id
where business.contact_name = 'freded meat';

-- 5
select * from unit_type where width > 5; 

-- 6
block_id , block_name 

select unit.unit_name , unit_type.name , unit_type.length , unit_type.width 
, unit_type.height   
 from unit  inner join block on unit.block_id = block.id  
inner join  unit_type on  unit.unit_type_id = unit_type.id 
where unit_type.name = 'garage';

