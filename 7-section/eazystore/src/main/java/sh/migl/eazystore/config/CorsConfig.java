package sh.migl.eazystore.config;

import org.springframework.web.filter.CorsFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration // Marks this class as a configuration class
public class CorsConfig {
    @Bean // Defines a bean for CORS filter
    public CorsFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of("http://localhost:5173")); // Allows requests from this origin
        config.setAllowedMethods(List.of("*")); // Allows all HTTP methods
        config.setAllowedHeaders(List.of("Content-Type")); // Allows the Content-Type header
        config.setAllowCredentials(true); // Allows credentials (cookies, authorization headers, etc.)

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config); // Applies this configuration to all endpoints
        return new CorsFilter(source);
    }
}