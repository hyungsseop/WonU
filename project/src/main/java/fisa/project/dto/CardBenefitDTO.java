package fisa.project.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CardBenefitDTO {
    private Integer cardBenefitNo;
    private String cardCorp;
    private String cardName;
    private String cardIntroLine;
    private String cardBenefit1;
    private String cardBenefit2;
}
