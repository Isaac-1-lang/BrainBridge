package com.learn.brainbridge.repository;

import com.learn.brainbridge.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * CommentRepository - Data Access Layer for Comment entity
 */
@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    
    /**
     * Find all comments for a project
     * Spring generates: SELECT * FROM comments WHERE project_id = ? ORDER BY created_at DESC
     */
    List<Comment> findByProjectIdOrderByCreatedAtDesc(Long projectId);
    
    /**
     * Find all comments by user
     * Spring generates: SELECT * FROM comments WHERE user_id = ?
     */
    List<Comment> findByUserId(Long userId);
    
    /**
     * Find comments by project and user
     */
    List<Comment> findByProjectIdAndUserId(Long projectId, Long userId);
    
    /**
     * Count comments for a project
     * Spring generates: SELECT COUNT(*) FROM comments WHERE project_id = ?
     */
    long countByProjectId(Long projectId);
    
    /**
     * Check if comment exists and belongs to user
     */
    boolean existsByIdAndUserId(Long commentId, Long userId);
    
    /**
     * Find comment by ID with project and user loaded
     */
    @Query("SELECT c FROM Comment c JOIN FETCH c.project JOIN FETCH c.user WHERE c.id = :id")
    Optional<Comment> findByIdWithRelations(@Param("id") Long id);
}

