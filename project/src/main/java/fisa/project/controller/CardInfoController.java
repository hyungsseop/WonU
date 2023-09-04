package fisa.project.controller;

import fisa.project.domain.CardInfo;
import fisa.project.domain.User;
import fisa.project.dto.UserDTO;
import fisa.project.repository.CardInfoRepository;
import fisa.project.service.CardInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Controller
public class CardInfoController {

    @Autowired
    private CardInfoService cardInfoService;
    @Autowired
    private CardInfoRepository cardInfoRepository;

    @GetMapping("/cardInfo")
    public ResponseEntity<?> CardInfo() {
        return ResponseEntity.ok().body(cardInfoRepository.findAll());
    }
}
