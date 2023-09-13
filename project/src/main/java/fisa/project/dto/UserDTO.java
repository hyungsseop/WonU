package fisa.project.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO { // 회원가입(signup), 로그인(signin) controller에 사용
    private String id;
    private String userId;
    private String userName;
    private String password;
    private String phone;
    private Integer gender;
    private String birthday;
    private String ageCategory;
    private LocalDate joinDate;
    private LocalDateTime lastLoginDate;
    private LocalDateTime lastLogoutDate;
    private String token;
}
