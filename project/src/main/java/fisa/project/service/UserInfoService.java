package fisa.project.service;

import fisa.project.domain.UserInfo;
import fisa.project.dto.UserInfoDTO;
import fisa.project.repository.UserInfoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserInfoService {
    @Autowired
    private UserInfoRepository userInfoRepository;

    public UserInfo newUserInfo(UserInfo userInfo){

        userInfoRepository.save(userInfo);
        return userInfo;
    }

    public UserInfo updateUserInfo(UserInfo userInfo){
        UserInfo newUserInfo =  userInfoRepository.update(userInfo);
        userInfoRepository.save(newUserInfo);
        return newUserInfo;
    }

    public boolean infoCheck(UserInfo userInfo){
        if (userInfoRepository.findOne(userInfo.getUserId()) != null){
            return true;
        }
        return false;
    }

}
