package com.learn.brainbridge.entity;

import io.swagger.v3.oas.annotations.Hidden;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Analytics Entity - Tracks analytics data for projects
 * 
 * CONCEPTS TO LEARN:
 * 1. @ManyToOne - Many analytics records belong to one project
 * 2. Analytics tracking - Records views, likes, and other metrics over time
 * 3. @Hidden - Prevents Swagger from including this entity in API documentation
 */
@Hidden
@Entity
@Table(name = "analytics")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Analytics {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * @ManyToOne - Many analytics records belong to one project
     * @JoinColumn - Creates foreign key column "project_id" in analytics table
     * @JsonIgnore - Prevents circular reference when serializing to JSON
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id", nullable = false)
    @JsonIgnore
    private Project project;

    @Column(name = "event_type", nullable = false, length = 50)
    private String eventType; // e.g., "VIEW", "LIKE", "COMMENT", "SHARE"

    @Column(name = "event_data", columnDefinition = "TEXT")
    private String eventData; // JSON string for additional event data

    @Column(name = "ip_address", length = 45)
    private String ipAddress;

    @Column(name = "user_agent", length = 500)
    private String userAgent;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }
}
