package fisa.project.controller;

import fisa.project.domain.SurveyDb;
import fisa.project.domain.User;
import fisa.project.dto.SurveyDbDTO;
import fisa.project.dto.SurveyPostDTO;
import fisa.project.repository.SurveyDbRepository;
import fisa.project.repository.UserRepository;
import fisa.project.service.SurveyDbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;
@Controller
@RequestMapping("/survey")
public class SurveyDbController {

    @Autowired
    private SurveyDbRepository surveyDbRepository;

    @Autowired
    private SurveyDbService surveyDbService;

    @Autowired
    private UserRepository userRepository;

    private RestTemplate restTemplate;


    @PostMapping("/regist")
    public ResponseEntity<?> SurveyRegist(@RequestBody SurveyDbDTO surveyDbDTO){
        SurveyDb surveyDb = surveyDbService.regist(surveyDbDTO);
        User user = userRepository.findByUserId(surveyDbDTO.getUserId());
        SurveyPostDTO surveyPostDTO = SurveyPostDTO.builder()
                .localDate(LocalDate.now().toString())
                .userId(user.getUserId())
                .gender(user.getGender())
                .age(user.getAgeCategory())
                .survey1(surveyDb.getCardOwnYn())
                .survey2(surveyDb.getCardPurpose())
                .survey3(surveyDb.getPreferBenefit())
                .survey4(surveyDb.getMostBenefit())
                .survey5(surveyDb.getAirportMileage())
                .survey6(surveyDb.getPreferDesign())
                .survey7(surveyDb.getCardYearFee())
                .survey8(surveyDb.getLastMonthExpense())
                .survey9(surveyDb.getThisMonthExpense())
                .build();
        //System.out.println(surveyPostDTO.getLocalDate());
        String fastApiUrl = "http://127.0.0.1:8000/rco/predict";
        RestTemplate restTemplate = new RestTemplate();
        HttpEntity<SurveyPostDTO> request = new HttpEntity<>(surveyPostDTO);
        //System.out.println(request);
        ResponseEntity<?> response = restTemplate.postForEntity(fastApiUrl, request, String.class);
        System.out.println(response);



        return ResponseEntity.ok().body(response);
    }
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

}
