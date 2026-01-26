package com.learn.brainbridge.repository;

import com.learn.brainbridge.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * ProjectRepository - Data Access Layer for Project entity
 * 
 * CONCEPTS TO LEARN:
 * 1. JpaRepository provides CRUD operations automatically
 * 2. Method naming conventions create queries automatically
 * 3. Custom queries with @Query annotation
 */
@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
    
    /**
     * Find all projects by user ID
     * Spring generates: SELECT * FROM projects WHERE user_id = ?
     */
    List<Project> findByUserId(Long userId);
    
    /**
     * Find all public projects
     * Spring generates: SELECT * FROM projects WHERE is_public = true
     */
    List<Project> findByIsPublicTrue();
    
    /**
     * Find all active projects
     * Spring generates: SELECT * FROM projects WHERE is_active = true
     */
    List<Project> findByIsActiveTrue();
    
    /**
     * Find public and active projects
     * Spring generates: SELECT * FROM projects WHERE is_public = true AND is_active = true
     */
    List<Project> findByIsPublicTrueAndIsActiveTrue();
    
    /**
     * Find projects by programming language (using join with collection table)
     * Note: This requires a custom query due to @ElementCollection
     */
    @Query("SELECT DISTINCT p FROM Project p JOIN p.programmingLanguages pl WHERE pl = :language")
    List<Project> findByProgrammingLanguage(@Param("language") String language);
    
    /**
     * Find projects by user ID and active status
     */
    List<Project> findByUserIdAndIsActiveTrue(Long userId);
    
    /**
     * Custom query to find projects with most views
     * ORDER BY view_count DESC LIMIT :limit
     */
    @Query("SELECT p FROM Project p WHERE p.isPublic = true AND p.isActive = true ORDER BY p.viewCount DESC")
    List<Project> findTopProjectsByViews(@Param("limit") int limit);
    
    /**
     * Custom query to find projects with most likes
     */
    @Query("SELECT p FROM Project p WHERE p.isPublic = true AND p.isActive = true ORDER BY p.likeCount DESC")
    List<Project> findTopProjectsByLikes(@Param("limit") int limit);
    
    /**
     * Check if project exists and belongs to user
     */
    boolean existsByIdAndUserId(Long projectId, Long userId);
}

