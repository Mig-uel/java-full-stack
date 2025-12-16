package sh.migl.eazystore.service.impl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sh.migl.eazystore.dto.ProductDto;
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
    public List<ProductDto> getProducts() {
        return productRepository.findAll()
                .stream()
                .map(this::transformToDto)
                .toList();
    }

    // Transforms a Product entity to a ProductDto
    private ProductDto transformToDto(Product product) {
        ProductDto dto = new ProductDto();
        BeanUtils.copyProperties(product, dto);
        dto.setProductId(product.getId());
        return  dto;
    }
}
