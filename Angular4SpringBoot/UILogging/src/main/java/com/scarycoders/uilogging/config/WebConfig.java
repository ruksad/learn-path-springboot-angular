package com.scarycoders.uilogging.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "com.scarycoders.uilogging")
public class WebConfig  extends WebMvcConfigurerAdapter{


  @Value("${cors.allowed.origins}")
  private String[] allowedOrigins;

  @Value("${cors.allowed.methods}")
  private String[] allowedMethods;

  @Value("${cors.exposed.headers}")
  private String[] exposedHeaders;

  @Value("${cors.allowed.header}")
  private String[] allowedHeaders;

  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {
    if (!registry.hasMappingForPattern("/dist/**")) {
      registry.addResourceHandler("/dist/**").addResourceLocations("classpath:/dist/");
    }
    if (!registry.hasMappingForPattern("/static/**")) {
      registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/");
    }
    if (!registry.hasMappingForPattern("/**")) {
      registry.addResourceHandler("/**").addResourceLocations("classpath:/dist/");
    }
    if (!registry.hasMappingForPattern("/asset/**")) {
      registry.addResourceHandler("/asset/**").addResourceLocations("classpath:/dist/");
    }

    if (!registry.hasMappingForPattern("/assets/**")) {
      registry.addResourceHandler("/assets/**").addResourceLocations("classpath:/static/assets/");
    }
  }

  @Bean
  public InternalResourceViewResolver internalViewResolver() {
    InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
    viewResolver.setPrefix("/dist/");
    viewResolver.setSuffix(".html");
    return viewResolver;
  }

//  @Override
//  public void addCorsMappings(CorsRegistry registry) {
//    registry.addMapping("/**")
//        .allowedOrigins(allowedOrigins)
//        .allowedHeaders(allowedHeaders)
//        .allowedMethods(allowedMethods)
//        .exposedHeaders(exposedHeaders)
//        .maxAge(3600);
//  }
}
