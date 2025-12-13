package com.learn.brainbridge.ServiceImpl;

import com.learn.brainbridge.Exception.BadRequestException;
import com.learn.brainbridge.Exception.ResourceNotFoundException;
import com.learn.brainbridge.dtos.CommentDTO;
import com.learn.brainbridge.entity.Comment;
import com.learn.brainbridge.entity.Project;
import com.learn.brainbridge.entity.User;
import com.learn.brainbridge.repository.CommentRepository;
import com.learn.brainbridge.repository.ProjectRepository;
import com.learn.brainbridge.repository.UserRepository;
import com.learn.brainbridge.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

/**
 * CommentServiceImpl - Implementation of CommentService
 */
@Service
@Transactional
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public CommentDTO createComment(CommentDTO commentDTO, Long userId) {
        // Find project
        Project project = projectRepository.findById(commentDTO.getProjectId())
                .orElseThrow(() -> new ResourceNotFoundException("Project", commentDTO.getProjectId()));

        // Find user
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", userId));

        // Convert DTO to Entity
        Comment comment = new Comment();
        comment.setContent(commentDTO.getContent());
        comment.setProject(project);
        comment.setUser(user);
        comment.setIsEdited(false);

        // Save to database
        Comment savedComment = commentRepository.save(comment);

        // Convert to DTO and return
        return convertToDTO(savedComment);
    }

    @Override
    @Transactional(readOnly = true)
    public CommentDTO getCommentById(Long id) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Comment", id));
        return convertToDTO(comment);
    }

    @Override
    @Transactional(readOnly = true)
    public List<CommentDTO> getCommentsByProjectId(Long projectId) {
        return commentRepository.findByProjectIdOrderByCreatedAtDesc(projectId)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<CommentDTO> getCommentsByUserId(Long userId) {
        return commentRepository.findByUserId(userId)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public CommentDTO updateComment(Long id, CommentDTO commentDTO, Long userId) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Comment", id));

        // Check authorization
        if (!comment.getUser().getId().equals(userId)) {
            throw new BadRequestException("You don't have permission to update this comment");
        }

        // Update content
        if (commentDTO.getContent() != null) {
            comment.setContent(commentDTO.getContent());
        }

        Comment updatedComment = commentRepository.save(comment);
        return convertToDTO(updatedComment);
    }

    @Override
    public void deleteComment(Long id, Long userId) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Comment", id));

        // Check authorization
        if (!comment.getUser().getId().equals(userId)) {
            throw new BadRequestException("You don't have permission to delete this comment");
        }

        commentRepository.deleteById(id);
    }

    private CommentDTO convertToDTO(Comment comment) {
        CommentDTO dto = new CommentDTO();
        dto.setId(comment.getId());
        dto.setContent(comment.getContent());
        dto.setProjectId(comment.getProject().getId());
        dto.setUserId(comment.getUser().getId());
        dto.setUsername(comment.getUser().getUsername());
        dto.setIsEdited(comment.getIsEdited());
        dto.setCreatedAt(comment.getCreatedAt());
        dto.setUpdatedAt(comment.getUpdatedAt());
        return dto;
    }
}

