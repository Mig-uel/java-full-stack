package sh.migl.eazystore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sh.migl.eazystore.dto.ContactDto;
import sh.migl.eazystore.service.IContactService;

@RestController // Marks this class as a REST controller
@RequestMapping("api/v1/contacts") // Base URL for all product-related endpoints
public class ContactController {
    private final IContactService contactService;

    @Autowired
    public ContactController(IContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping // Handles HTTP POST requests to save a new contact
    public String saveContact(@RequestBody ContactDto contactDto) {
        boolean isSaved = contactService.saveContact(contactDto);
        return isSaved ? "Contact saved successfully." : "Failed to save contact.";
    }
}
