package fisa.project.config;

import fisa.project.security.JwtAuthenticationFilter;
import fisa.project.security.TokenProvider;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.filter.CorsFilter;

@EnableWebSecurity
@Slf4j
@Configuration
public class WebSecurityConfig  {


    @Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // http 시큐리티 빌더
        http.csrf().disable();
        http.cors();
        http.httpBasic().disable();
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//        http.authorizeHttpRequests().requestMatchers("/","/auth/**").permitAll().anyRequest().authenticated();
        http.addFilterAfter(jwtAuthenticationFilter,CorsFilter.class);


        return http.build();
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}