package fisa.project.repository;

import fisa.project.domain.UserInfo;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

@Repository
public class UserInfoRepository {
    @PersistenceContext
    private EntityManager em;

    public void save(UserInfo userInfo) {
        em.persist(userInfo);
    }

    public UserInfo update(UserInfo userInfo){
        UserInfo findUserInfo = em.find(UserInfo.class, userInfo.getUserId());
        findUserInfo.setV1(userInfo.getV1());
        findUserInfo.setV2(userInfo.getV2());
        findUserInfo.setV3(userInfo.getV3());
        findUserInfo.setV4(userInfo.getV4());
        return userInfo;
    }

    public UserInfo findOne(String id){
        return em.find(UserInfo.class, id);
    }

}
