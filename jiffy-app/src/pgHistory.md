select * from users
select * from doctor
select * from patient

delete from users
delete from doctor
delete from patient

alter table patient
drop column email_address

alter table doctor
drop column email_address

alter table users
add email_address Text UNIQUE NOT NULL
constraint valid_email_address CHECK (email_address ~ '^[A-Za-z0-9]+@[A-Za-z0-9]+[.][A-Za-z]+$')

