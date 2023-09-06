package fisa.project.service;

import fisa.project.domain.CardInfo;
import fisa.project.repository.CardInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CardInfoService {
    @Autowired
    private CardInfoRepository cardInfoRepository;

    public List<CardInfo> findAll(){
        return cardInfoRepository.findAll();
    }
}
