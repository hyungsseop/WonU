package fisa.project.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(uniqueConstraints = {@UniqueConstraint(columnNames = "cardNo")})
public class CardInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private int cardNo;

    @Column(nullable = false)
    private String cardCorp;

    @Column(nullable = false)
    private String cardName;

    @Column(nullable = false)
    private int domesticFee;

    @Column(nullable = false)
    private int overseasYn;

    @Column
    private Integer overseasFee;

    @Column(nullable = false)
    private int minLastMonth;

    @Column(nullable = false)
    private String minThisMonth;

    @Column(nullable = false)
    private String benefitMain;

    @Column(nullable = false)
    private String benefitMate;

    @Column(nullable = false)
    private String cardUrl;

    @Column(nullable = false)
    private String card_image;
}
