package fisa.project.service;

import fisa.project.domain.User;
import fisa.project.domain.exitUser;
import fisa.project.repository.ExitUserRepository;
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

    @Autowired
    private ExitUserRepository exitUserRepository;


    public User create(final User user) {
        if (user == null || user.getUserName() == null) {
            throw new RuntimeException("Invalid arguments");
        }
        final String username = user.getUserName();
        if (userRepository.existsByUserName(username)) {
            log.warn("중복회원", username);
            throw new RuntimeException("중복회원");
        }
        return userRepository.save(user);
    }

    public exitUser delete(final User user) {
        exitUser userDelete = exitUser.builder()
                .userId(user.getUserId())
                .username(user.getUserName())
                .birthday(user.getBirthday())
                .gender(user.getGender())
                .phone(user.getPhone())
                .build();
        userRepository.delete(user);
        exitUserRepository.save(userDelete);
        return exitUserRepository.save(userDelete);
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
        originalUser.setUserName(user.getUserName());
        originalUser.setBirthday(user.getBirthday());
        originalUser.setPhone(user.getPhone());
        originalUser.setGender(user.getGender());

        return userRepository.save(originalUser);
    }
}
