package sh.migl.eazystore.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sh.migl.eazystore.entity.Product;
import sh.migl.eazystore.repository.ProductRepository;
import sh.migl.eazystore.service.IProductService;

import java.util.List;

@Service // Marks this class as a Spring service component
public class ProductServiceImpl implements IProductService {
    private final ProductRepository productRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> getProducts() {
        return productRepository.findAll();
    }
}
