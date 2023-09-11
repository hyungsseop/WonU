package fisa.project.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import java.time.LocalDateTime;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(uniqueConstraints = {@UniqueConstraint(columnNames = "surveyDbNo")})
public class SurveyDb {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer surveyDbNo;

    @Column(nullable = false)
    private String userId;

    @Column(nullable = false)
    private Integer cardOwnYn;

    @Column(nullable = false)
    private Integer cardPurpose;

    @Column
    private int preperBenefit;

    @Column
    private int mostBenefit;

    @Column
    private int airportMileage;

    @Column
    private int perferDesign;

    @Column
    private int cardYearFee;

    @Column
    private int lastMonthExpense;

    @Column(nullable = false)
    private int thisMonthExpense;

    @Column(nullable = false)
    private LocalDateTime surveyDate;

    @Column
    private Integer surveySatisfy;

    @Column
    private Integer surveySatisfyDetail;

    @Column(nullable = false)
    private String surveyRecommCard;

}
