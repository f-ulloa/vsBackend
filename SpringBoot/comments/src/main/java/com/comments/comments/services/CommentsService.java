package com.comments.comments.service;

import org.springframework.stereotype.Service;

@Service
public class CommentsService {
  private static final String template = "Hello, %s!";

  public String hello(String name) {
    return String.format(template, name);
  }
  
}
