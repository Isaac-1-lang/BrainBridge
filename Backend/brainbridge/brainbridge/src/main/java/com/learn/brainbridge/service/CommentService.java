package com.learn.brainbridge.service;

import com.learn.brainbridge.dtos.CommentDTO;

import java.util.List;

/**
 * CommentService Interface - Defines business logic operations for Comments
 */
public interface CommentService {
    
    /**
     * Create a new comment
     * @param commentDTO Comment data
     * @param userId User ID who is creating the comment
     * @return Created comment DTO
     */
    CommentDTO createComment(CommentDTO commentDTO, Long userId);
    
    /**
     * Get comment by ID
     * @param id Comment ID
     * @return Comment DTO
     */
    CommentDTO getCommentById(Long id);
    
    /**
     * Get all comments for a project
     * @param projectId Project ID
     * @return List of comment DTOs
     */
    List<CommentDTO> getCommentsByProjectId(Long projectId);
    
    /**
     * Get all comments by user
     * @param userId User ID
     * @return List of comment DTOs
     */
    List<CommentDTO> getCommentsByUserId(Long userId);
    
    /**
     * Update comment
     * @param id Comment ID
     * @param commentDTO Updated comment data
     * @param userId User ID (for authorization)
     * @return Updated comment DTO
     */
    CommentDTO updateComment(Long id, CommentDTO commentDTO, Long userId);
    
    /**
     * Delete comment
     * @param id Comment ID
     * @param userId User ID (for authorization)
     */
    void deleteComment(Long id, Long userId);
}

