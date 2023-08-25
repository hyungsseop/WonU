package fisa.project.service;

import fisa.project.dto.UserDTO;
import fisa.project.model.UserEntity;
import fisa.project.persistence.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserEntity create(final UserEntity userEntity) {
        if (userEntity == null || userEntity.getUsername() == null) {
            throw new RuntimeException("Invalid arguments");
        }
        final String username = userEntity.getUsername();
        if (userRepository.existsByUsername(username)) {
            log.warn("중복회원", username);
            throw new RuntimeException("중복회원");
        }
        return userRepository.save(userEntity);
    }

    // usedId로
//    public UserEntity userCheck(final UserEntity userEntity){
//
//    }

    public UserEntity getByCredentials(final String userId, final String password, final PasswordEncoder encoder) {
        final UserEntity originalUser = userRepository.findByUserId(userId);

        if(originalUser != null && encoder.matches(password, originalUser.getPassword())){
            return originalUser;
        }
        return null;
    }
}
