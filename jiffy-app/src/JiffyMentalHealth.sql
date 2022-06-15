CREATE TYPE specialization_enum AS ENUM ('CLINICAL_PSYCHOLOGY', 'COUNSELLING_PSYCHOLOGY', 'FORENSIC_PSYCHOLOGY', 
                                        'HEALTH_PSYCHOLOGY', 'INDUSTRIAL_PSYCHOLOGY', 'ORGANIZATIONAL_PSYCHOLOGY',
                                        'NEUROPSYCHOLOGY', 'REHABILITATION_PSYCHOLOGY', 'SCHOOL_PSYCHOLOGY');
CREATE TYPE communication_method_enum AS ENUM ('ZOOM', 'SKYPE', 'FACETIME', 'DISCORD', 'GOOGLE_DUO', 'WHATSAPP', 'MICROSOFT_TEAMS');
CREATE TYPE appointment_request_status_enum AS ENUM ('PENDING', 'ACCEPTED', 'CANCELLED', 'EXPIRED');
CREATE TYPE appointment_status_enum AS ENUM ('UPCOMING', 'CANCELLED', 'ABSENT', 'COMPLETE');

CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE Doctor (
    user_id INTEGER PRIMARY KEY REFERENCES Users(user_id),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    social_insurance_number TEXT UNIQUE NOT NULL CONSTRAINT valid_SIN CHECK (social_insurance_number ~ '^(\d{9})$'),
    specialization specialization_enum NOT NULL,
    appointment_rate NUMERIC(16, 2) NOT NULL CONSTRAINT valid_rate CHECK (appointment_rate >= 100),
    email_address TEXT UNIQUE NOT NULL CONSTRAINT valid_email_address CHECK (email_address ~ '^[A-Za-z0-9]+@[A-Za-z0-9]+[.][A-Za-z]+$')
);

CREATE TABLE Patient (
    user_id INTEGER PRIMARY KEY REFERENCES Users(user_id),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    social_insurance_number TEXT UNIQUE NOT NULL CONSTRAINT valid_SIN CHECK (social_insurance_number ~ '^(\d{9})$'),
    credit_card TEXT NOT NULL CONSTRAINT valid_credit_card CHECK (credit_card ~ '^\d{4}-\d{4}-\d{4}-\d{4}$'),
    home_address TEXT NOT NULL,
    email_address TEXT UNIQUE NOT NULL CONSTRAINT valid_email_address CHECK (email_address ~ '^[A-Za-z0-9]+@[A-Za-z0-9]+[.][A-Za-z]+$')
);

CREATE TABLE AppointmentRequests (
    request_id SERIAL PRIMARY KEY,
    patient_user_id INTEGER NOT NULL,
    doctor_user_id INTEGER NOT NULL,
    appointment_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    communication_method communication_method_enum NOT NULL,
    request_description TEXT,
    appointment_request_status appointment_request_status_enum NOT NULL,
    FOREIGN KEY (patient_user_id) REFERENCES Patient(user_id),
    FOREIGN KEY (doctor_user_id) REFERENCES Doctor(user_id)
);

CREATE TABLE Appointment (
    appointment_id SERIAL PRIMARY KEY,
    patient_user_id INTEGER NOT NULL,
    doctor_user_id INTEGER NOT NULL,
    appointment_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    communication_method communication_method_enum NOT NULL,
    appointment_hourly_cost NUMERIC(16, 2) NOT NULL CONSTRAINT valid_hourly_rate CHECK (appointment_hourly_cost >= 0),
    appointment_status appointment_status_enum NOT NULL,
    FOREIGN KEY (patient_user_id) REFERENCES Patient(user_id),
    FOREIGN KEY (doctor_user_id) REFERENCES Doctor(user_id)
);


