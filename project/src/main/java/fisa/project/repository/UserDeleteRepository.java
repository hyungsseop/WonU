package fisa.project.repository;

import fisa.project.domain.UserDelete;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDeleteRepository extends JpaRepository<UserDelete, String> {
}
