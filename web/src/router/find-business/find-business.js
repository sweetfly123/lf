import React from 'react';
import { Carousel } from 'antd';
import { TabsComponent } from '../../components/tabs';
import { BrandService } from './brand';
import { InviteSerice } from './forinvite';
import { StreetService } from './street';
import { ScenicService } from './scenic';
import { TownService } from './town';

const tabs = [
  {
    tab: '品牌招商',
    key: 'brand',
    component: BrandService
  }, {
    tab: '政府招商引资',
    key: 'forInvite',
    component: InviteSerice
  }, {
    tab: '商街招商',
    key: 'street',
    component: StreetService
  }, {
    tab: '园区招商',
    key: 'park',
    component: StreetService
  }, {
    tab: '景区招商',
    key: 'scenic',
    component: ScenicService
  }, {
    tab: '小镇招商',
    key: 'town',
    component: TownService
  }
]

export function FindBusiness() {
  return (
    <div>
      <Carousel autoplay style={{ padding: '10px 10px' }}>
        <div>
          <img style={{ width: 'inherit' }} src="https://www.lvfacn.com/upload/default/20180612/4f425f5e0b2e4d5f2b43a6154c19763a.png" alt="入驻旅发网" />
        </div>
        <div>
          <img style={{ width: 'inherit' }} src="https://www.lvfacn.com/upload/default/20180612/4f425f5e0b2e4d5f2b43a6154c19763a.png" alt="入驻旅发网" />
        </div>
      </Carousel>
      <TabsComponent defaultActiveKey='brand' centered={true} render={tabs} />
    </div>
  )
}