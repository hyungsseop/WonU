package fisa.project.controller;

import fisa.project.domain.User;
import fisa.project.domain.UserInfo;
import fisa.project.dto.ResponseDTO;
import fisa.project.dto.UserDTO;
import fisa.project.dto.UserInfoDTO;
import fisa.project.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/info")
public class UserInfoController {

    @Autowired
    private UserInfoService userInfoService;

    @PostMapping("/infocheck")
    public boolean infoCheck(@RequestBody UserInfoDTO userInfoDTO){
        UserInfo userInfo = UserInfo.builder()
                .userId(userInfoDTO.getUserId())
                .v1(userInfoDTO.getV1())
                .v2(userInfoDTO.getV2())
                .v3(userInfoDTO.getV3())
                .v4(userInfoDTO.getV4())
                .build();

        return userInfoService.infoCheck(userInfo);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createUserInfo(@RequestBody UserInfoDTO userInfoDTO) {
        UserInfo userInfo = UserInfo.builder()
                .userId(userInfoDTO.getUserId())
                .v1(userInfoDTO.getV1())
                .v2(userInfoDTO.getV2())
                .v3(userInfoDTO.getV3())
                .v4(userInfoDTO.getV4())
                .build();
        try {
            // UserService로 보내 추가 로직 검사후 생성
            userInfoService.newUserInfo(userInfo);

            return ResponseEntity.ok().body(userInfoDTO);
        } catch (Exception e) {
            // 유저 정보는 항상 하나이므로 리스트로 만들어야 하는 ResponseDTO를 사용하지 않고 그냥 UserDTO 리턴.

            ResponseDTO responseDTO = ResponseDTO.builder().error(e.getMessage()).build();
            return ResponseEntity
                    .badRequest()
                    .body(responseDTO);
        }
    }


    @PostMapping("/update")
    public ResponseEntity<?> updateUserInfo(@RequestBody UserInfoDTO userInfoDTO){
        UserInfo userInfo = UserInfo.builder()
                .userId(userInfoDTO.getUserId())
                .v1(userInfoDTO.getV1())
                .v2(userInfoDTO.getV2())
                .v3(userInfoDTO.getV3())
                .v4(userInfoDTO.getV4())
                .build();
        userInfoService.updateUserInfo(userInfo);
        return ResponseEntity.ok().body(userInfoDTO);
    }

//    @PostMapping("/delete")
//    public ResponseEntity<?> deleteUserInfo(@RequestBody UserInfoDTO userInfoDTO){
//        UserInfo userInfo = UserInfo.builder()
//                .userId(userInfoDTO.getUserId())
//                .v1(userInfoDTO.getV1())
//                .v2(userInfoDTO.getV2())
//                .v3(userInfoDTO.getV3())
//                .v4(userInfoDTO.getV4())
//                .build();
//        userInfoService.updateUserInfo(userInfo);
//        return ResponseEntity.ok().body(userInfoDTO);
//    }
}
