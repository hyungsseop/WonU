package fisa.project.controller;

import fisa.project.dto.ResponseDTO;
import fisa.project.dto.UserDTO;
import fisa.project.model.UserEntity;
import fisa.project.security.TokenProvider;
import fisa.project.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserService userService;

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
            UserEntity user = UserEntity.builder()
                    .userId(userDTO.getUserId())
                    .username(userDTO.getUsername())
                    .password(passwordEncoder.encode(userDTO.getPassword()))
                    .gender(userDTO.getGender())
                    .birthday(userDTO.getBirthday())
                    .build();
            // UserService로 보내 추가 로직 검사후 생성
            UserEntity registeredUser = userService.create(user);
            //
            UserDTO responseUserDTO = UserDTO.builder()
                    .id(registeredUser.getId())
                    .username(registeredUser.getUsername())
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
        UserEntity user = userService.getByCredentials(
            userDTO.getUserId(),
            userDTO.getPassword(),
            passwordEncoder
    );
        if(user != null) {
            final String token = tokenProvider.create(user);
            final UserDTO responseUserDTO = UserDTO.builder()
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
        UserEntity user = userService.getByCredentials(
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
}
