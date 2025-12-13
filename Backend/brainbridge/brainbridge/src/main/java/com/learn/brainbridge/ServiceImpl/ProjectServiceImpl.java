package com.learn.brainbridge.ServiceImpl;

import com.learn.brainbridge.Exception.BadRequestException;
import com.learn.brainbridge.Exception.ResourceNotFoundException;
import com.learn.brainbridge.dtos.ProjectDTO;
import com.learn.brainbridge.entity.Project;
import com.learn.brainbridge.entity.User;
import com.learn.brainbridge.repository.ProjectRepository;
import com.learn.brainbridge.repository.UserRepository;
import com.learn.brainbridge.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

/**
 * ProjectServiceImpl - Implementation of ProjectService
 */
@Service
@Transactional
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public ProjectDTO createProject(ProjectDTO projectDTO, Long userId) {
        // Find user
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", userId));

        // Convert DTO to Entity
        Project project = new Project();
        project.setTitle(projectDTO.getTitle());
        project.setDescription(projectDTO.getDescription());
        // Convert String[] to List<String>
        if (projectDTO.getProgrammingLanguage() != null) {
            project.setProgrammingLanguages(Arrays.asList(projectDTO.getProgrammingLanguage()));
        }
        project.setIsPublic(projectDTO.getIsPublic() != null ? projectDTO.getIsPublic() : true);
        project.setIsActive(true);
        project.setViewCount(0L);
        project.setLikeCount(0L);
        project.setUser(user);

        // Save to database
        Project savedProject = projectRepository.save(project);

        // Convert to DTO and return
        return convertToDTO(savedProject);
    }

    @Override
    @Transactional(readOnly = true)
    public ProjectDTO getProjectById(Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project", id));

        // Increment view count
        project.setViewCount(project.getViewCount() + 1);
        projectRepository.save(project);

        return convertToDTO(project);
    }

    @Override
    @Transactional(readOnly = true)
    public List<ProjectDTO> getAllProjects() {
        return projectRepository.findByIsPublicTrueAndIsActiveTrue()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<ProjectDTO> getProjectsByUserId(Long userId) {
        return projectRepository.findByUserIdAndIsActiveTrue(userId)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<ProjectDTO> getPublicProjects() {
        return projectRepository.findByIsPublicTrueAndIsActiveTrue()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ProjectDTO updateProject(Long id, ProjectDTO projectDTO, Long userId) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project", id));

        // Check authorization
        if (!project.getUser().getId().equals(userId)) {
            throw new BadRequestException("You don't have permission to update this project");
        }

        // Update fields
        if (projectDTO.getTitle() != null) {
            project.setTitle(projectDTO.getTitle());
        }
        if (projectDTO.getDescription() != null) {
            project.setDescription(projectDTO.getDescription());
        }
        if (projectDTO.getProgrammingLanguage() != null) {
            project.setProgrammingLanguages(Arrays.asList(projectDTO.getProgrammingLanguage()));
        }
        if (projectDTO.getIsPublic() != null) {
            project.setIsPublic(projectDTO.getIsPublic());
        }

        Project updatedProject = projectRepository.save(project);
        return convertToDTO(updatedProject);
    }

    @Override
    public void deleteProject(Long id, Long userId) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project", id));

        // Check authorization
        if (!project.getUser().getId().equals(userId)) {
            throw new BadRequestException("You don't have permission to delete this project");
        }

        // Soft delete (set isActive to false) or hard delete
        project.setIsActive(false);
        projectRepository.save(project);
        // Or use: projectRepository.deleteById(id); for hard delete
    }

    @Override
    public void incrementViewCount(Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project", id));
        project.setViewCount(project.getViewCount() + 1);
        projectRepository.save(project);
    }

    @Override
    public void incrementLikeCount(Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project", id));
        project.setLikeCount(project.getLikeCount() + 1);
        projectRepository.save(project);
    }

    @Override
    public void decrementLikeCount(Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project", id));
        if (project.getLikeCount() > 0) {
            project.setLikeCount(project.getLikeCount() - 1);
            projectRepository.save(project);
        }
    }

    private ProjectDTO convertToDTO(Project project) {
        ProjectDTO dto = new ProjectDTO();
        dto.setId(project.getId());
        dto.setTitle(project.getTitle());
        dto.setDescription(project.getDescription());
        // Convert List<String> to String[]
        if (project.getProgrammingLanguages() != null && !project.getProgrammingLanguages().isEmpty()) {
            dto.setProgrammingLanguage(project.getProgrammingLanguages().toArray(new String[0]));
        }
        dto.setIsPublic(project.getIsPublic());
        dto.setIsActive(project.getIsActive());
        dto.setViewCount(project.getViewCount());
        dto.setLikeCount(project.getLikeCount());
        dto.setUserId(project.getUser().getId());
        dto.setUsername(project.getUser().getUsername());
        dto.setCommentCount(project.getComments() != null ? project.getComments().size() : 0);
        dto.setCreatedAt(project.getCreatedAt());
        dto.setUpdatedAt(project.getUpdatedAt());
        return dto;
    }
}

