package fisa.project.repository;

import fisa.project.domain.SurveyDbMeaning;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SurveyDbMeaningRepository extends JpaRepository<SurveyDbMeaning, String> {
}
