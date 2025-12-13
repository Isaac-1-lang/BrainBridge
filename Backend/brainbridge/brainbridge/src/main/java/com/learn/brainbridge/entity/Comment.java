package com.learn.brainbridge.entity;

import io.swagger.v3.oas.annotations.Hidden;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.time.LocalDateTime;

/**
 * Comment Entity - Represents a comment on a project
 * 
 * CONCEPTS TO LEARN:
 * 1. @ManyToOne - Many comments belong to one project
 * 2. @ManyToOne - Many comments belong to one user (commenter)
 * 3. Bidirectional relationship - Comment knows its Project, Project knows its Comments
 * 4. @Hidden - Prevents Swagger from including this entity in API documentation
 */
@Hidden
@Entity
@Table(name = "comments")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    /**
     * @ManyToOne - Many comments belong to one project
     * @JoinColumn - Creates foreign key column "project_id" in comments table
     * @JsonIgnore - Prevents circular reference when serializing to JSON
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id", nullable = false)
    @JsonIgnore
    private Project project;

    /**
     * @ManyToOne - Many comments belong to one user (the commenter)
     * @JoinColumn - Creates foreign key column "user_id" in comments table
     * @JsonIgnore - Prevents circular reference when serializing to JSON
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore
    private User user;

    @Column(name = "is_edited")
    private Boolean isEdited = false;

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
        isEdited = true;
    }
}
