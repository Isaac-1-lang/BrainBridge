package com.learn.brainbridge.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * Project Entity - Represents a coding project in the BrainBridge system
 * 
 * CONCEPTS TO LEARN:
 * 1. @Entity - Marks this class as a JPA entity (database table)
 * 2. @ManyToOne - Many projects belong to one user (many-to-one relationship)
 * 3. @OneToMany - One project has many comments (one-to-many relationship)
 * 4. @JoinColumn - Specifies the foreign key column name
 * 5. CascadeType - Defines what happens to related entities when parent is modified
 */
@Entity
@Table(name = "projects")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    /**
     * @ElementCollection - Stores a collection of simple values
     * @CollectionTable - Creates a separate table for the collection
     * Stores programming languages as a list in a separate table
     */
    @ElementCollection
    @CollectionTable(name = "project_programming_languages", joinColumns = @JoinColumn(name = "project_id"))
    @Column(name = "programming_language", length = 50)
    private List<String> programmingLanguages;

    @Column(name = "is_public")
    private Boolean isPublic = true;

    @Column(name = "is_active")
    private Boolean isActive = true;

    @Column(name = "view_count")
    private Long viewCount = 0L;

    @Column(name = "like_count")
    private Long likeCount = 0L;

    /**
     * @ManyToOne - Many projects belong to one user
     * @JoinColumn - Creates foreign key column "user_id" in projects table
     * FetchType.LAZY - Loads user only when accessed (better performance)
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    /**
     * @OneToMany - One project has many comments
     * mappedBy - Points to the "project" field in Comment entity
     * CascadeType.ALL - Deleting project deletes all its comments
     * orphanRemoval - Deleting comment from list removes it from database
     */
    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comment> comments = new ArrayList<>();

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
