package sh.migl.eazystore.service;

import sh.migl.eazystore.dto.ContactDto;
import sh.migl.eazystore.dto.ProductDto;

import java.util.List;

public interface IContactService {
    boolean saveContact(ContactDto contactDto); // Save a new contact request
}
