package fisa.project.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SurveyPostDTO {
    public String localDate;
    public String userId;
    public Integer gender;
    public String age;
    public Integer survey1;
    public Integer survey2;
    public Integer survey3;
    public Integer survey4;
    public Integer survey5;
    public Integer survey6;
    public Integer survey7;
    public Integer survey8;
    public Integer survey9;
}
