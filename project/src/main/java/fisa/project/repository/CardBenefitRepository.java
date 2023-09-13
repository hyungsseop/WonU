package fisa.project.repository;

import fisa.project.domain.CardBenefit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardBenefitRepository extends JpaRepository<CardBenefit, String> {
}
