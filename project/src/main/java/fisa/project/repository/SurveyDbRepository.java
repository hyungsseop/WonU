package fisa.project.repository;

import fisa.project.domain.SurveyDb;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;

public interface SurveyDbRepository extends JpaRepository<SurveyDb, String> {
}
