package sh.migl.eazystore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sh.migl.eazystore.dto.ProductDto;
import sh.migl.eazystore.service.IProductService;

import java.util.List;

@RestController // Marks this class as a REST controller
@RequestMapping("api/v1/products") // Base URL for all product-related endpoints
public class ProductController {

    private final IProductService productService;

    @Autowired
    public ProductController(IProductService productService) {
        this.productService = productService;
    }

    @GetMapping // Maps HTTP GET requests to this method
    public List<ProductDto> getProducts() {
        return productService.getProducts();
    }
}
