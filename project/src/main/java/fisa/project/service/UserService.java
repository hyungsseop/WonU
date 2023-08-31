package fisa.project.service;

import fisa.project.domain.User;
import fisa.project.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User create(final User user) {
        if (user == null || user.getUsername() == null) {
            throw new RuntimeException("Invalid arguments");
        }
        final String username = user.getUsername();
        if (userRepository.existsByUsername(username)) {
            log.warn("중복회원", username);
            throw new RuntimeException("중복회원");
        }
        return userRepository.save(user);
    }

    // usedId로
//    public User userCheck(final User userEntity){
//
//    }

    public User getByCredentials(final String userId, final String password, final PasswordEncoder encoder) {
        final User originalUser = userRepository.findByUserId(userId);

        if(originalUser != null && encoder.matches(password, originalUser.getPassword())){
            return originalUser;
        }
        return null;
    }

    public User updateUser(final User user) {
        User originalUser = userRepository.findByUserId(user.getUserId());
        if (user.getPassword() != null) {
            originalUser.setPassword(user.getPassword());
        }
        originalUser.setUsername(user.getUsername());
        originalUser.setBirthday(user.getBirthday());
        originalUser.setPhoneNumber(user.getPhoneNumber());
        originalUser.setGender(user.getGender());

        return userRepository.save(originalUser);
    }
}
