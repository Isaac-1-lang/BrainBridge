package com.learn.brainbridge.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * User Entity - Represents a user in the BrainBridge system
 * 
 * CONCEPTS TO LEARN:
 * 1. @Entity - Marks this class as a JPA entity (database table)
 * 2. @Table - Specifies the table name in the database
 * 3. @Id - Marks the primary key field
 * 4. @GeneratedValue - Auto-generates the ID value
 * 5. @Column - Customizes column properties (name, nullable, unique, etc.)
 * 6. @Enumerated - Maps Java enum to database column
 * 7. @CreationTimestamp - Automatically sets creation time
 * 8. @UpdateTimestamp - Automatically updates modification time
 * 9. Lombok annotations (@Data, @NoArgsConstructor, @AllArgsConstructor) - Reduces boilerplate
 */
@Entity
@Table(name = "users") // Table name in database
@Data // Lombok: Generates getters, setters, toString, equals, hashCode
@NoArgsConstructor // Lombok: Generates no-args constructor
@AllArgsConstructor // Lombok: Generates constructor with all fields
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increment ID
    private Long id;

    @Column(nullable = false, unique = true, length = 100)
    private String email;

    @Column(nullable = false, length = 100)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(name = "first_name", length = 50)
    private String firstName;

    @Column(name = "last_name", length = 50)
    private String lastName;

    @Column(name = "profile_image_url")
    private String profileImageUrl;

    @Column(name = "is_active")
    private Boolean isActive = true; // Default value

    @Column(name = "is_email_verified")
    private Boolean isEmailVerified = false;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    /**
     * @PrePersist - Executes before entity is saved for the first time
     * Sets createdAt timestamp automatically
     */
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    /**
     * @PreUpdate - Executes before entity is updated
     * Updates the updatedAt timestamp automatically
     */
    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
