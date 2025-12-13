package sh.migl.eazystore.service;

import sh.migl.eazystore.entity.Product;

import java.util.List;

public interface IProductService {
    List<Product> getProducts(); // Method to retrieve a list of products
}
