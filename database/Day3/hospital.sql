CREATE TABLE Drug (
    code_number BIGSERIAL PRIMARY KEY,
    recommend_dosage VARCHAR(255) NOT NULL
);

CREATE TABLE Drug_Brand (
    drug_code BIGINT NOT NULL REFERENCES Drug(code_number) ON DELETE CASCADE,
    brand VARCHAR(255) NOT NULL,
    PRIMARY KEY (drug_code, brand)
);

CREATE TABLE Nurse (
    nurse_number BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL
);

CREATE TABLE Ward (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    nurse_id BIGINT NOT NULL REFERENCES Nurse(nurse_number) ON DELETE CASCADE
);

CREATE TABLE Patient (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date_of_birth DATE NOT NULL,
    ward_id BIGINT NOT NULL REFERENCES Ward(id) ON DELETE CASCADE
);

CREATE TABLE Consultant (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE Patient_Consultant (
    patient_id BIGINT PRIMARY KEY REFERENCES Patient(id) ON DELETE CASCADE,
    consultant_id BIGINT NOT NULL REFERENCES Consultant(id) ON DELETE CASCADE
);

CREATE TABLE Patient_Consultant_Lead (
    patient_id BIGINT NOT NULL REFERENCES Patient(id) ON DELETE CASCADE,
    consultant_id BIGINT NOT NULL REFERENCES Consultant(id) ON DELETE CASCADE,
    PRIMARY KEY (patient_id, consultant_id)
);

CREATE TABLE Patient_Nurse_Drug (
    patient_id BIGINT NOT NULL REFERENCES Patient(id) ON DELETE CASCADE,
    nurse_id BIGINT NOT NULL REFERENCES Nurse(nurse_number) ON DELETE CASCADE,
    drug_code BIGINT NOT NULL REFERENCES Drug(code_number) ON DELETE CASCADE,
    PRIMARY KEY (patient_id, nurse_id, drug_code)
);