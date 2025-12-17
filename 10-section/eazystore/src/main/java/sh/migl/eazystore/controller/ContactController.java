package sh.migl.eazystore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sh.migl.eazystore.dto.ContactDto;
import sh.migl.eazystore.service.IContactService;

import java.util.HashMap;

@RestController // Marks this class as a REST controller
@RequestMapping("api/v1/contacts") // Base URL for all product-related endpoints
public class ContactController {
    private final IContactService contactService;

    @Autowired
    public ContactController(IContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping // Handles HTTP POST requests to save a new contact
    public HashMap<String, Boolean> saveContact(@RequestBody ContactDto contactDto) {
        boolean isSaved = contactService.saveContact(contactDto);
        return new HashMap<>() {{
            put("success", isSaved);
        }};
    }
}
