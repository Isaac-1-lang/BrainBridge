package com.learn.brainbridge.controllers;

import com.learn.brainbridge.dtos.LoginDTO;
import com.learn.brainbridge.dtos.RegisterUserDTO;
import com.learn.brainbridge.dtos.UserDTO;
import com.learn.brainbridge.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * UserController - REST API Controller for User operations
 * 
 * CONCEPTS TO LEARN:
 * 1. @RestController - Combines @Controller + @ResponseBody
 *    - @Controller: Marks this as a Spring MVC controller
 *    - @ResponseBody: Converts return values to JSON automatically
 * 2. @RequestMapping - Base URL path for all endpoints in this controller
 * 3. @Autowired - Dependency injection (injects UserService)
 * 4. HTTP Methods:
 *    - @GetMapping: GET request (retrieve data)
 *    - @PostMapping: POST request (create data)
 *    - @PutMapping: PUT request (update data)
 *    - @DeleteMapping: DELETE request (delete data)
 * 5. @PathVariable - Extracts value from URL path (/api/users/{id})
 * 6. @RequestBody - Converts JSON request body to Java object
 * 7. @Valid - Triggers validation on DTO (checks @NotBlank, @Email, etc.)
 * 8. ResponseEntity<T> - Wraps response with HTTP status code
 * 9. HttpStatus - HTTP status codes (OK, CREATED, NOT_FOUND, etc.)
 */
@RestController
@RequestMapping("/api/users") // All endpoints start with /api/users
public class UserController {

    /**
     * @Autowired - Spring injects UserService automatically
     * Controller depends on Service, Service depends on Repository
     * This is the "layered architecture" pattern
     */
    @Autowired
    private UserService userService;

    /**
     * POST /api/users/register
     * Register a new user
     * 
     * @param registerDTO - User registration data from request body
     * @return ResponseEntity with created user and HTTP 201 CREATED status
     */
    @PostMapping("/register")
    public ResponseEntity<UserDTO> registerUser(@Valid @RequestBody RegisterUserDTO registerDTO) {
        UserDTO createdUser = userService.registerUser(registerDTO);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    /**
     * POST /api/users/login
     * Login a user
     * 
     * @param loginDTO - Login credentials from request body
     * @return ResponseEntity with user data and HTTP 200 OK status
     */
    @PostMapping("/login")
    public ResponseEntity<UserDTO> loginUser(@Valid @RequestBody LoginDTO loginDTO) {
        UserDTO user = userService.loginUser(loginDTO);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    /**
     * GET /api/users/{id}
     * Get user by ID
     * 
     * @param id - User ID from URL path
     * @return ResponseEntity with user data and HTTP 200 OK status
     */
    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Long id) {
        UserDTO user = userService.getUserById(id);
        return ResponseEntity.ok(user); // Shortcut for new ResponseEntity<>(user, HttpStatus.OK)
    }

    /**
     * GET /api/users
     * Get all users
     * 
     * @return ResponseEntity with list of users and HTTP 200 OK status
     */
    @GetMapping
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        List<UserDTO> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    /**
     * PUT /api/users/{id}
     * Update user information
     * 
     * @param id - User ID from URL path
     * @param userDTO - Updated user data from request body
     * @return ResponseEntity with updated user and HTTP 200 OK status
     */
    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> updateUser(
            @PathVariable Long id,
            @Valid @RequestBody UserDTO userDTO) {
        UserDTO updatedUser = userService.updateUser(id, userDTO);
        return ResponseEntity.ok(updatedUser);
    }

    /**
     * DELETE /api/users/{id}
     * Delete user by ID
     * 
     * @param id - User ID from URL path
     * @return ResponseEntity with HTTP 204 NO_CONTENT status
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build(); // HTTP 204 No Content
        // 529 is the one which has completely stopped receiving requests
        // 429 shows that there is rate limiting the API is actually receiving the requests but it can't continue processing them.
    }
}
