package sh.migl.eazystore.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // Marks this class as a REST controller
@RequestMapping("api/v1/products") // Base URL for all product-related endpoints
public class ProductController {
    @GetMapping // Maps HTTP GET requests to this method
    public String getProducts() {
        return "List of products";
    }
}
