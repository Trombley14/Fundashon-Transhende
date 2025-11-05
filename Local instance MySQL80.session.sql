CREATE TABLE Client (
    client_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    date_of_birth DATE NOT NULL,
    gender ENUM("Male", "Female", "Other") NOT NULL,
    district VARCHAR(255) NOT NULL,
    telephone1 VARCHAR(15) NOT NULL,
    telephone2 VARCHAR(15),
    doctor VARCHAR(255) NOT NULL,
    mobility ENUM("Laying in bed", "Walking", "Walking badly", "Mobility aid", "Wheelchair") NOT NULL,
    insurance ENUM("SVB", "BVZ", "AVBZ", "Particulier", "Eigen beheer") NOT NULL,
    expiry_date DATE NOT NULL,
    details TEXT NOT NULL,
    contact_person1 VARCHAR(255) NOT NULL,
    contact_telephone1 VARCHAR(15) NOT NULL,
    contact_person2 VARCHAR(255),
    contact_telephone2 VARCHAR(15),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )

;