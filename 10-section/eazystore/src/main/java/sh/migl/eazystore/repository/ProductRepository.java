package sh.migl.eazystore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sh.migl.eazystore.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}