package com.comments.comments.controller;

import com.comments.comments.service.CommentsService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;


@RestController
public class commentsController {

	private final CommentsService commentsService;


	@Autowired
	public commentsController(CommentsService commentsService) {
			this.commentsService = commentsService;
	}

  
  @GetMapping("/hello")
	public String getHelloWorld(@RequestParam(value = "name", defaultValue = "World") String name) {
		return  commentsService.hello(name);
	}
}
