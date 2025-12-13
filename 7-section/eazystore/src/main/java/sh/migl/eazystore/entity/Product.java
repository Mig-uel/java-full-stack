package sh.migl.eazystore.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.Instant;

@Getter // Lombok annotation to generate getter methods for all fields
@Setter // Lombok annotation to generate setter methods for all fields
@Entity // Marks this class as a JPA entity
// An entity is a lightweight, persistent domain object. Typically, an entity represents a table in a relational database, and each entity instance corresponds to a row in that table.
@Table(name = "products") // Maps this entity to the "products" table in the database
public class Product {
    @Id // Specifies the primary key of the entity
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id", nullable = false)
    private Long productId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "price", nullable = false)
    private BigDecimal price;

    @Column(name = "popularity", nullable = false)
    private Integer popularity;

    @Column(name = "image_url", length = 512)
    private String imageUrl;

    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt;

    @Column(name = "created_by", nullable = false, updatable = false)
    private String createdBy;

    @Column(name = "updated_at")
    private Instant updatedAt;

    @Column(name = "updated_by")
    private String updatedBy;
}