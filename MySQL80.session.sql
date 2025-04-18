-- @block
CREATE TABLE Clients(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    date_of_birth DATE NOT NULL,
    id_number VARCHAR(20) NOT NULL,
    address VARCHAR(100) NOT NULL,
    district VARCHAR(50) NOT NULL,
    telephone1 VARCHAR(15) NOT NULL,
    telephone2 VARCHAR(15),
    doctor VARCHAR(50) NOT NULL,
    mobility ENUM('Laying in bed', 'No') NOT NULL,
    insurance ENUM('SVB', 'No') NOT NULL,
    expiry_date DATE NOT NULL,
    details VARCHAR(510) NOT NULL,
    contact_person VARCHAR(50) NOT NULL,
    contact_person_telephone VARCHAR(15) NOT NULL,
    contact_person2 VARCHAR(50),
    contact_person2_telephone VARCHAR(15),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL DEFAULT NULL
)
