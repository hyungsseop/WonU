package fisa.project.repository;

import fisa.project.domain.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, String> {
    UserEntity findByUsername(String username);
    Boolean existsByUsername(String username);
    UserEntity findByUserIdAndPassword(String userId, String password);
    UserEntity findByUserId(String UserId);
}
