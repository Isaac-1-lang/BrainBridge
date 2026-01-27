package com.learn.brainbridge.generics;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data // This is the main which makes getters and setters

public class ApiResponses1<T> {

  private boolean success;
  private String message;
  private T data;
  
}
