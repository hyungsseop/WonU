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
@Table(uniqueConstraints = {@UniqueConstraint(columnNames = "surveyDbMeaningNo")})
public class SurveyDbMeaning {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer surveyDbMeaningNo;

    @Column(nullable = false)
    private String columnName;

    @Column(nullable = false)
    private Integer domainValue;

    @Column(nullable = false)
    private String domainValueMeaning;
}
