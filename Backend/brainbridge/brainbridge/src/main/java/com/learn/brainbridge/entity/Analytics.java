package com.learn.brainbridge.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * Analytics Entity - Tracks analytics data for projects
 * 
 * CONCEPTS TO LEARN:
 * 1. @ManyToOne - Many analytics records belong to one project
 * 2. Analytics tracking - Records views, likes, and other metrics over time
 */
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
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id", nullable = false)
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
