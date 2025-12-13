package com.learn.brainbridge.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * ProjectDTO - Data Transfer Object for Project
 * 
 * CONCEPTS TO LEARN:
 * 1. DTO Pattern - Separates API layer from database layer
 * 2. @NotBlank - Validation: Field cannot be null, empty, or whitespace
 * 3. @Size - Validation: Limits string length
 * 4. DTOs don't include entity relationships directly (no User object, just userId)
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProjectDTO {

    private Long id;

    @NotBlank(message = "Title is required")
    @Size(min = 1, max = 200, message = "Title must be between 1 and 200 characters")
    private String title;

    @Size(max = 5000, message = "Description cannot exceed 5000 characters")
    private String description;

    @Size(max = 10, message = "Programming languages cannot exceed 10 characters")
    private String[] programmingLanguage = new String[10];

    private Boolean isPublic = true;

    private Boolean isActive = true;

    private Long viewCount = 0L;

    private Long likeCount = 0L;

    private Long userId; // Reference to user, not the full User object

    private String username; // For display purposes

    private Integer commentCount; // Number of comments

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
