package sh.migl.eazystore.service.impl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sh.migl.eazystore.dto.ContactDto;
import sh.migl.eazystore.repository.ContactRepository;
import sh.migl.eazystore.service.IContactService;

@Service // Marks this class as a Spring service component
public class ContactServiceImpl implements IContactService {
    private final ContactRepository contactRepository;

    @Autowired
    public ContactServiceImpl(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @Override
    public boolean saveContact(ContactDto contactDto) {
        try {
            Contact contact = transformToEntity(contactDto);
            contact.setCreatedBy(contact.getName());
            contactRepository.save(contact);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    // Transforms a ContactDto to a Contact entity
    private Contact transformToEntity(ContactDto contactDto) {
        Contact contact = new Contact();
        BeanUtils.copyProperties(contactDto, contact);
        return  contact;
    }
}
