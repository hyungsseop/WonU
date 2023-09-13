package fisa.project.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SurveyDbDTO {
    private Integer surveyDbNo;
    private String userId;
    private Integer cardOwnYn;
    private Integer cardPurpose;
    private int preferBenefit;
    private int mostBenefit;
    private int airportMileage;
    private int preferDesign;
    private int cardYearFee;
    private int lastMonthExpense;
    private int thisMonthExpense;
    private LocalDateTime surveyDate;
    private Integer surveySatisfy;
    private Integer surveySatisfyDetail;
    private String surveyRecommCard;
}
