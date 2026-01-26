package com.learn.brainbridge.ServiceImpl;

import com.learn.brainbridge.Exception.ResourceNotFoundException;
import com.learn.brainbridge.dtos.AnalyticsDTO;
import com.learn.brainbridge.entity.Analytics;
import com.learn.brainbridge.entity.Project;
import com.learn.brainbridge.repository.AnalyticsRepository;
import com.learn.brainbridge.repository.ProjectRepository;
import com.learn.brainbridge.service.AnalyticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * AnalyticsServiceImpl - Implementation of AnalyticsService
 */
@Service
@Transactional
public class AnalyticsServiceImpl implements AnalyticsService {

    @Autowired
    private AnalyticsRepository analyticsRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public AnalyticsDTO createAnalytics(AnalyticsDTO analyticsDTO) {
        // Find project
        Project project = projectRepository.findById(analyticsDTO.getProjectId())
                .orElseThrow(() -> new ResourceNotFoundException("Project", analyticsDTO.getProjectId()));

        // Convert DTO to Entity
        Analytics analytics = new Analytics();
        analytics.setProject(project);
        analytics.setEventType(analyticsDTO.getEventType());
        analytics.setEventData(analyticsDTO.getEventData());
        analytics.setIpAddress(analyticsDTO.getIpAddress());
        analytics.setUserAgent(analyticsDTO.getUserAgent());

        // Save to database
        Analytics savedAnalytics = analyticsRepository.save(analytics);

        // Convert to DTO and return
        return convertToDTO(savedAnalytics);
    }

    @Override
    @Transactional(readOnly = true)
    public AnalyticsDTO getAnalyticsById(Long id) {
        Analytics analytics = analyticsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Analytics", id));
        return convertToDTO(analytics);
    }

    @Override
    @Transactional(readOnly = true)
    public List<AnalyticsDTO> getAnalyticsByProjectId(Long projectId) {
        return analyticsRepository.findByProjectId(projectId)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public Map<String, Long> getAnalyticsSummary(Long projectId) {
        List<Object[]> results = analyticsRepository.getAnalyticsSummaryByProjectId(projectId);
        Map<String, Long> summary = new HashMap<>();
        
        for (Object[] result : results) {
            String eventType = (String) result[0];
            Long count = (Long) result[1];
            summary.put(eventType, count);
        }
        
        return summary;
    }

    @Override
    public void trackView(Long projectId, String ipAddress, String userAgent) {
        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new ResourceNotFoundException("Project", projectId));

        Analytics analytics = new Analytics();
        analytics.setProject(project);
        analytics.setEventType("VIEW");
        analytics.setIpAddress(ipAddress);
        analytics.setUserAgent(userAgent);

        analyticsRepository.save(analytics);
    }

    @Override
    public void trackLike(Long projectId) {
        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new ResourceNotFoundException("Project", projectId));

        Analytics analytics = new Analytics();
        analytics.setProject(project);
        analytics.setEventType("LIKE");

        analyticsRepository.save(analytics);
    }

    @Override
    public void trackComment(Long projectId) {
        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new ResourceNotFoundException("Project", projectId));

        Analytics analytics = new Analytics();
        analytics.setProject(project);
        analytics.setEventType("COMMENT");

        analyticsRepository.save(analytics);
    }

    private AnalyticsDTO convertToDTO(Analytics analytics) {
        AnalyticsDTO dto = new AnalyticsDTO();
        dto.setId(analytics.getId());
        dto.setProjectId(analytics.getProject().getId());
        dto.setEventType(analytics.getEventType());
        dto.setEventData(analytics.getEventData());
        dto.setIpAddress(analytics.getIpAddress());
        dto.setUserAgent(analytics.getUserAgent());
        dto.setCreatedAt(analytics.getCreatedAt());
        return dto;
    }
}

