package com.qy.wenlv.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.qy.wenlv.entity.LFMerchant;

import java.util.List;

public interface LFMerchantService extends IService<LFMerchant> {
    List<LFMerchant> getLFInfo(Integer currentPage, Integer pageSize);

    Integer getLFCount();
}
