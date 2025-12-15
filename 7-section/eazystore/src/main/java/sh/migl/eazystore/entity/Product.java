package sh.migl.eazystore.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.math.BigDecimal;
import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "PRODUCTS")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PRODUCT_ID", nullable = false)
    private Long id;

    @Column(name = "NAME", nullable = false)
    private String name;

    @ColumnDefault("NULL")
    @Lob
    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "PRICE", nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @ColumnDefault("0")
    @Column(name = "POPULARITY")
    private Integer popularity;

    @Column(name = "IMAGE_URL", length = 512)
    private String imageUrl;

    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "CREATED_AT", nullable = false)
    private Instant createdAt;

    @ColumnDefault("NULL")
    @Column(name = "CREATED_BY")
    private String createdBy;

    @ColumnDefault("NULL")
    @Column(name = "UPDATED_AT")
    private Instant updatedAt;

    @ColumnDefault("NULL")
    @Column(name = "UPDATED_BY")
    private String updatedBy;
}