package fisa.project.repository;

import fisa.project.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    User findByUserName(String userName);
    Boolean existsByUserName(String userName);
    User findByUserIdAndPassword(String userId, String password);
    User findByUserId(String UserId);

}
