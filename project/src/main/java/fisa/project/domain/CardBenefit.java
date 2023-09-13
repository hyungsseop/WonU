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
@Table(uniqueConstraints = {@UniqueConstraint(columnNames = "cardBenefitNo")})
public class CardBenefit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer cardBenefitNo;

    @Column(nullable = false)
    private String cardCorp;

    @Column(nullable = false)
    private String cardName;

    @Column(nullable = false)
    private String cardIntroLine;

    @Column
    private String cardBenefit1;

    @Column
    private String cardBenefit2;

}
