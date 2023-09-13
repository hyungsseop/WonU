package fisa.project.controller;

import fisa.project.repository.CardBenefitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class CardBenefitController {
    @Autowired
    private CardBenefitRepository cardBenefitRepository;

    @GetMapping("/cardbenefit")
    public ResponseEntity<?> CardInfo() {
        return ResponseEntity.ok().body(cardBenefitRepository.findAll());
    }
}
