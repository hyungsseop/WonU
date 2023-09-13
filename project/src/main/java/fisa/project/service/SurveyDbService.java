package fisa.project.service;

import fisa.project.domain.SurveyDb;
import fisa.project.domain.User;
import fisa.project.dto.SurveyDbDTO;
import fisa.project.dto.SurveyPostDTO;
import fisa.project.repository.SurveyDbRepository;
import fisa.project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class SurveyDbService {

    @Autowired
    private SurveyDbRepository surveyDbRepository;
    @Autowired
    private UserRepository userRepository;

    public SurveyDb regist(final SurveyDbDTO surveyDbDTO){
        User user =  userRepository.findByUserId(surveyDbDTO.getUserId());

        SurveyDb surveyDb = SurveyDb.builder()
                .userId(surveyDbDTO.getUserId())
                .cardOwnYn(surveyDbDTO.getCardOwnYn())
                .cardPurpose(surveyDbDTO.getCardPurpose())
                .preferBenefit(surveyDbDTO.getPreferBenefit())
                .mostBenefit(surveyDbDTO.getMostBenefit())
                .airportMileage(surveyDbDTO.getAirportMileage())
                .preferDesign(surveyDbDTO.getPreferDesign())
                .cardYearFee(surveyDbDTO.getCardYearFee())
                .lastMonthExpense(surveyDbDTO.getLastMonthExpense())
                .thisMonthExpense(surveyDbDTO.getThisMonthExpense())
                .surveyDate(LocalDateTime.now())
                .surveyRecommCard("")
                .build();

        return surveyDbRepository.save(surveyDb);
    }
}
