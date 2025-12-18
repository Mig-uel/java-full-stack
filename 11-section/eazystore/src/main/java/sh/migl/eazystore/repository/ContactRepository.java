package sh.migl.eazystore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sh.migl.eazystore.entity.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}