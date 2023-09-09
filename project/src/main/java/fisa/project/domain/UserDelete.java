package fisa.project.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(uniqueConstraints = {@UniqueConstraint(columnNames = "userNo")})
public class UserDelete {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private int userNo;

    @Column(nullable = false)
    private String userId;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String phoneNumber;

    @Column(nullable = false)
    private String gender;

    @Column(nullable = false)
    private String birthday;
}
