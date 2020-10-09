package com.qy.wenlv.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.qy.wenlv.entity.LFExpert;
import com.qy.wenlv.entity.LFMerchant;

import java.util.List;

public interface LFExpertService extends IService<LFExpert> {
    List<LFExpert> getLFInfo(Integer currentPage, Integer pageSize);

    Integer getLFCount();
}
