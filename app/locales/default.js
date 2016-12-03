import I18n from 'react-native-i18n';

import enUS from './en-US';
import zhTW from './zh-TW';

I18n.translations = {
  	en,
	zh
};

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true

I18n.defaultLocale = "zh-TW";
I18n.locale = "zh-TW";
//I18n.currentLocale();

export default I18n;