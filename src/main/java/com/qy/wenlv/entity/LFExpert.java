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
@TableName("lv_expert")
public class LFExpert {
    private String id;
    private String userId;
    private String curJob;
    private String curCorp;
    private String sexpId;
    private String corpId;
    private String industry;
    private String jobCatId;
    private String spTrade;
    private String specialty;
    private String specialtyItem;
    private String specialtyItemTwo;
    private String provinces;
    private String cities;
    private String area;
    private String bgUrl;
    private String isJobIden;
    private String jobstatus;
    private String mark;
    private String detail;
    private String expType;
    private String visible;
    private String createTime;
    private String updateTime;
    private String names;
    private String avatar;
    private String userType;
    private String exptype;
    private String edubg;
    private String corpname;
    private String speboth;
    private String isser;
    private String minprice;
    private String maxprice;
    private String sernum;
    private String goodpercent;
    private String sucpercent;
    private String isIden;
    private String isFriend;
    private String friendTot;
    private String toFriends;
}
