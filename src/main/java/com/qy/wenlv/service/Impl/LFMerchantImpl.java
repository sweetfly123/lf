package com.qy.wenlv.service.Impl;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.qy.wenlv.entity.LFMerchant;
import com.qy.wenlv.mapper.LFMerchantMapper;
import com.qy.wenlv.service.LFMerchantService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Barret
 * @description
 * @date 8/16/2020
 */
@Service
@Slf4j
public class LFMerchantImpl extends ServiceImpl<LFMerchantMapper, LFMerchant> implements LFMerchantService {
    @Autowired
    private LFMerchantMapper lfMapper;

    @Override
    public List<LFMerchant> getLFInfo(Integer currentPage, Integer pageSize) {
        IPage<LFMerchant> page = new Page<>(currentPage, pageSize);
        IPage<LFMerchant> pageList = this.page(page);
        List<LFMerchant> records = pageList.getRecords();
        return records;
    }

    /**
     * 功能描述 返回数据总数
     *
     * @return java.util.List<com.qy.wenlv.entity.LFEntity>
     * @author Barret
     * @date 8/22/2020
     */
    @Override
    public Integer getLFCount() {
        Integer count = lfMapper.selectCount(null);
        return count;
    }
}
