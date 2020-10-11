package com.qy.wenlv.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Barret
 * @description
 * @date 8/14/2020
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("lv_merchant")
public class LFMerchant {
    private Integer id;
    private String name;
    private String merchantsType;
    private String resourceType;
    private String productType;
    private String summary;
    private String postHits;
    private String thumbnail;
    private String province;
    private String cities;
    private String corpId;
    private String createTime;
    private String status;
    private String recommend;
    private String coCount;
    @TableField("cname")
    private String cName;
    @TableField("uname")
    private String uName;
    @TableField("istatus")
    private String iStatus;
    @TableField("iid")
    private String iId;
    @TableField("lfurl")
    private String lfUrl;
}
