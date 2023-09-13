package fisa.project.repository;

import fisa.project.domain.exitUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExitUserRepository extends JpaRepository<exitUser, String> {
}
