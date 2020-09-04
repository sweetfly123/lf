package com.qy.wenlv.controller;

import com.qy.wenlv.dto.DefaultResult;
import com.qy.wenlv.entity.LFEntity;
import com.qy.wenlv.service.LFService;
import com.qy.wenlv.utils.ResultUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author Barret
 * @description
 * @date 8/18/2020
 */
@RestController
@RequestMapping("/auth/service")
@Api("服务信息")
public class LFController {

    @Autowired
    private LFService lfService;


    @ApiOperation("获取服务列表")
    @GetMapping("/list")
    @ApiImplicitParams(
            {
                    @ApiImplicitParam(paramType = "query", dataType = "String",
                            name = "page", value = "第几页", required = true),
                    @ApiImplicitParam(paramType = "query", dataType = "String",
                            name = "pageSize", value = "数量", required = true)
            }
    )
    public DefaultResult listServiceInfos(@RequestParam("page") Integer page, @RequestParam("pageSize") Integer pageSize) {
        List<LFEntity> lfInfoList = lfService.getLFInfo(page, pageSize);
        return DefaultResult.success(lfInfoList);
    }

    @ApiOperation("获取服务列表")
    @GetMapping("/error")
    public DefaultResult getError() {
        int i = 1 / 0;
        return null;
    }

    @ApiOperation("获取服务总数")
    @GetMapping("/count")
    public DefaultResult getLfCount() {
        Integer lfCount = lfService.getLFCount();
        Map map = new HashMap();
        map.put("count", lfCount);
        return DefaultResult.success(map);
    }
}
