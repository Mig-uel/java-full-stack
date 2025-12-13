package sh.migl.eazystore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sh.migl.eazystore.entity.Product;
import sh.migl.eazystore.repository.ProductRepository;

import java.util.List;

@RestController // Marks this class as a REST controller
@RequestMapping("api/v1/products") // Base URL for all product-related endpoints
public class ProductController {

    private final ProductRepository productRepository;

    @Autowired
    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    } // Constructor injection of ProductRepository

    @GetMapping // Maps HTTP GET requests to this method
    public List<Product> getProducts() {
        return productRepository.findAll();
    }
}
