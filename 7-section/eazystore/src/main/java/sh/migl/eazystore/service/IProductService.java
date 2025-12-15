package sh.migl.eazystore.service;

import sh.migl.eazystore.dto.ProductDto;

import java.util.List;

public interface IProductService {
    List<ProductDto> getProducts(); // Method to retrieve a list of products
}
