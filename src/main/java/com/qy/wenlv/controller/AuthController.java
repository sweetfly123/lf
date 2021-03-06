package com.qy.wenlv.controller;

import com.qy.wenlv.domain.Token;
import com.qy.wenlv.dto.LoginUserDTO;
import com.qy.wenlv.dto.UserDTO;
import com.qy.wenlv.entity.Role;
import com.qy.wenlv.mapper.RoleMapper;
import com.qy.wenlv.security.MyUser;
import com.qy.wenlv.service.UserService;
import com.qy.wenlv.utils.AssertUtils;
import com.qy.wenlv.vo.ResponseVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.provider.token.store.redis.RedisTokenStore;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


/**
 * @author Zhifeng.Zeng
 * @description 用户权限管理
 * @date 2019/4/19 13:58
 */
@Slf4j
@Validated
@RestController
@RequestMapping("/auth/")
@Api("用户")
public class AuthController {

    @Autowired
    private RoleMapper roleMapper;

    @Autowired
    private UserService userService;

    @Autowired
    private RedisTokenStore redisTokenStore;

    /**
     * @param userDTO
     * @return
     * @description 添加用户
     */
    @PostMapping("user")
    public ResponseVO add(@Valid @RequestBody UserDTO userDTO) throws Exception {
        userService.addUser(userDTO);
        return ResponseVO.success();
    }

    /**
     * @param id
     * @return
     * @description 删除用户
     */
    @DeleteMapping("user/{id}")
    public ResponseVO deleteUser(@PathVariable("id") Integer id) throws Exception {
        userService.deleteUser(id);
        return ResponseVO.success();
    }

    /**
     * @param user
     * @return
     * @descripiton 修改用户
     */
    @PutMapping("user")
    public ResponseVO updateUser(@Valid @RequestBody MyUser user) {
        userService.updateUser(user);
        return ResponseVO.success();
    }

    /**
     * @return
     * @description 获取用户列表
     */
    @GetMapping("user")
    public ResponseVO findAllUser() {
        return userService.findAllUserVO();
    }

    /**
     * @param loginUserDTO
     * @return
     * @description 用户登录
     */
    @ApiOperation("登录-获取token")
    @ApiImplicitParams(
            {
                    @ApiImplicitParam(paramType = "query", dataType = "String",
                            name = "username", value = "用户名", required = true),
                    @ApiImplicitParam(paramType = "query", dataType = "String",
                            name = "password", value = "密码", required = true)
            }
    )
    @PostMapping("user/login")
    public ResponseVO login(LoginUserDTO loginUserDTO) {
        return userService.login(loginUserDTO);
    }


    /**
     * @param authorization
     * @return
     * @description 用户注销
     */
    @GetMapping("user/logout")
    public ResponseVO logout(@RequestHeader("Authorization") String authorization) {
        redisTokenStore.removeAccessToken(AssertUtils.extracteToken(authorization));
        return ResponseVO.success();
    }

    /**
     * @param refreshToken
     * @return
     * @description 用户刷新Token
     */
    @GetMapping("user/refresh/{refreshToken}")
    public ResponseVO refresh(@PathVariable(value = "refreshToken") String refreshToken) {
        Object token = userService.oauthRefreshToken(refreshToken);
        return ResponseVO.success(token);
    }


    /**
     * @return
     * @description 获取所有角色列表
     */
    @GetMapping("role")
    public ResponseVO findAllRole() {
        List<Role> roles = roleMapper.selectByMap(null);
        return ResponseVO.success(roles);
    }


}