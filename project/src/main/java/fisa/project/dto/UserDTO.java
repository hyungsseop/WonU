package fisa.project.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO { // 회원가입(signup), 로그인(signin) controller에 사용
    private String id; // 고유 ID
    private String userId; // 사용자 ID
    private String username;
    private String password;
    private String passwordCheck; // password 확인
    private String phoneNumber;
    private String gender;
    private String birthday;
    private String token;
}
