package com.qy.wenlv.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.qy.wenlv.entity.LFEntity;

import java.util.List;

public interface LFService extends IService<LFEntity> {
    List<LFEntity> getLFInfo(Integer currentPage, Integer pageSize);

    public Integer getLFCount();
}
