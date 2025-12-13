package sh.migl.eazystore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sh.migl.eazystore.entity.Product;

@Repository // Indicates that this interface is a Spring Data repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}
