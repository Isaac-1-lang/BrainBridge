package com.learn.brainbridge.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * ProjectTag Entity - Join table for project tags
 * Represents the many-to-many relationship between projects and tags
 */
@Entity
@Table(name = "project_tags")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProjectTag {

    @EmbeddedId
    private ProjectTagId id;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("projectId")
    @JoinColumn(name = "project_id", nullable = false)
    @JsonIgnore
    private Project project;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("tagId")
    @JoinColumn(name = "tag_id", nullable = false)
    @JsonIgnore
    private Tag tag;

    @PrePersist
    protected void onCreate() {
        if (id == null) {
            id = new ProjectTagId();
        }
        if (project != null) {
            id.setProjectId(project.getId());
        }
        if (tag != null) {
            id.setTagId(tag.getId());
        }
    }
}
