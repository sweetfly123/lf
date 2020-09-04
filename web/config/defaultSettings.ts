import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = ProSettings & {
  pwa: boolean;
};

const proSettings: DefaultSettings = {
  "navTheme": "light",
  "primaryColor": "#1890ff",
  "layout": "top",
  "contentWidth": "Fixed",
  "fixedHeader": false,
  "fixSiderbar": true,
  "menu": {
    "locale": true
  },
  "title": "Ant Design Pro",
  "pwa": false,
  "iconfontUrl": "",
  "splitMenus": false
}

export type { DefaultSettings };

export default proSettings;
