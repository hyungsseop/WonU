package fisa.project.controller;

import fisa.project.domain.User;
import fisa.project.domain.exitUser;
import fisa.project.dto.ResponseDTO;
import fisa.project.dto.UserDTO;
import fisa.project.repository.UserRepository;
import fisa.project.security.TokenProvider;
import fisa.project.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;

@Slf4j
@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TokenProvider tokenProvider;

    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody UserDTO userDTO) {
        try {
            // 회원가입 로직
            if(userDTO == null || userDTO.getPassword() == null) {// || userDTO.getPassword().equals(userDTO.getPasswordCheck())) {
                throw new RuntimeException("Invalid Password value.");
            }
            // 입력받은 dto를 entity 로 변환

            User user = User.builder()
                    .userId(userDTO.getUserId())
                    .userName(userDTO.getUserName())
                    .password(passwordEncoder.encode(userDTO.getPassword()))
                    .gender(userDTO.getGender())
                    .phone(userDTO.getPhone())
                    .birthday(userDTO.getBirthday())
                    .ageCategory(userDTO.getAgeCategory())
                    .joinDate(LocalDate.now())
                    .build();
            // UserService로 보내 추가 로직 검사후 생성
            User registeredUser = userService.create(user);
            //
            UserDTO responseUserDTO = UserDTO.builder()
                    .id(registeredUser.getId())
                    .userName(registeredUser.getUserName())
                    .joinDate(registeredUser.getJoinDate())
                    .build();

            return ResponseEntity.ok().body(responseUserDTO);
        } catch (Exception e) {
            // 유저 정보는 항상 하나이므로 리스트로 만들어야 하는 ResponseDTO를 사용하지 않고 그냥 UserDTO 리턴.

            ResponseDTO responseDTO = ResponseDTO.builder().error(e.getMessage()).build();
            return ResponseEntity
                    .badRequest()
                    .body(responseDTO);
        }
    }
    @PostMapping("/login")
    public ResponseEntity<?> authenticate(@RequestBody UserDTO userDTO) {
        User user = userService.getByCredentials(
                userDTO.getUserId(),
                userDTO.getPassword(),
                passwordEncoder
        );
        if(user != null) {
            final String token = tokenProvider.create(user);
            final UserDTO responseUserDTO = UserDTO.builder()
                    .id(user.getId())
                    .userId(user.getUserId())
                    .token(token)
                    .build();
            System.out.println(ResponseEntity.ok().body(responseUserDTO));
            return ResponseEntity.ok().body(responseUserDTO);
        } else {
            ResponseDTO responseDTO = ResponseDTO.builder()
                    .error("Login failed.")
                    .build();
            return ResponseEntity
                    .badRequest()
                    .body(responseDTO);
        }
    }
    @PostMapping("/mypagelogin")
    public ResponseEntity<?> myPageLoginCheck(@RequestBody UserDTO userDTO){
        User user = userService.getByCredentials(
                userDTO.getUserId(),
                userDTO.getPassword(),
                passwordEncoder
        );
        if(user != null) {
            final UserDTO responseUserDTO = UserDTO.builder()
                    .userId(user.getUserId())
                    .build();
            System.out.println(ResponseEntity.ok().body(responseUserDTO));
            return ResponseEntity.ok().body(responseUserDTO);
        }
        else { ResponseDTO responseDTO = ResponseDTO.builder()
                .error("Login failed.")
                .build();
            return ResponseEntity
                    .badRequest()
                    .body(responseDTO);
        }
    }

    @GetMapping("/mypage/{userId}")
    public ResponseEntity<?> myPageInfo(@PathVariable("userId") String userId){
        User user = userRepository.findByUserId(userId);
        final UserDTO responseUserDTO = UserDTO.builder()
                .id(user.getId())
                .userId(user.getUserId())
                .userName(user.getUserName())
                .birthday(user.getBirthday())
                .phone(user.getPhone())
                .gender(user.getGender())
                .build();
        System.out.println(responseUserDTO);
        return ResponseEntity.ok().body(responseUserDTO);
    }

    @PostMapping("/mypage/{userId}/update")
    public ResponseEntity<?> myPageUpdate(@RequestBody UserDTO userDTO){
        String clientToken = userDTO.getId();
        final User originalUser = userRepository.findByUserId(userDTO.getUserId());
        System.out.println(userDTO);
        System.out.println(originalUser.getId().equals(clientToken));
        //System.out.println(originalUser.getId());
        System.out.println(clientToken);
        if(originalUser.getId().equals(clientToken)){
            User user = User.builder()
                    .userId(originalUser.getUserId())
                    .userName(originalUser.getUserName())
                    .password(passwordEncoder.encode(userDTO.getPassword()))
                    .phone(originalUser.getPhone())
                    .gender(originalUser.getGender())
                    .birthday(originalUser.getBirthday())
                    .build();

            userService.updateUser(user);
            System.out.println(ResponseEntity.ok().body(""));
            return ResponseEntity.ok().body("");
        }
        else { ResponseDTO responseDTO = ResponseDTO.builder()
                .error("My page update failed.")
                .build();
            return ResponseEntity
                    .badRequest()
                    .body(responseDTO);
        }


    }
    @DeleteMapping("/mypage/{userId}/delete")
    public ResponseEntity<?> userdelete(@PathVariable("userId") String userId){
        User user = userRepository.findByUserId(userId);
        exitUser registeredUser = userService.delete(user);
        return ResponseEntity.ok().body("탈퇴에 성공하였습니다.");
    }
}