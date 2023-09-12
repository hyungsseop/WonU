package fisa.project.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(uniqueConstraints = {@UniqueConstraint(columnNames = "userNo")})
public class exitUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private int userNo;

    @Column(nullable = false)
    private String userId;

    @Column(nullable = false)
    private String userPw;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String birthday;

    @Column(nullable = false)
    private Integer gender;

    @Column(nullable = false)
    private String phone;

    @Column
    private LocalDate exitDate;

    @Column
    private LocalDateTime lastLoginDate;

    @Column
    private LocalDateTime lastLogoutDate;
}
