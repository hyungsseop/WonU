package fisa.project.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CardInfoDTO {

    private int cardNo;

    private String cardCorp;

    private String cardName;

    private int domesticFee;

    private int overseasYn;

    private int overseasFee;

    private int minLastMonth;

    private String minThisMonth;

    private String benefitMain;

    private String benefitMate;

    private String cardUrl;

    private String card_image;

}
