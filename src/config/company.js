export const COMPANY = {
  name: 'Zhongpu Aluminum',
  tagline: 'Professional Manufacturer',
  siteUrl: 'https://zhongpu-aluminum.com',
  email: 'zhongpualu@outlook.com',
  phoneDisplay: '+86 18957133982',
  phoneHref: 'tel:+8618957133982',
  whatsappNumber: '8618957133982',
  whatsappUrl: 'https://wa.me/8618957133982',
  addressShort: 'Foshan, Guangdong, China',
  addressFull:
    'No. 12, Ligang Industrial Zone, Guanyao, Shishan Town, Nanhai District, Foshan City, Guangdong Province, China',
  businessHours:
    'Monday - Friday: 8:00 AM - 6:00 PM (GMT+8)\nSaturday: 9:00 AM - 5:00 PM (GMT+8)',
}

export const buildSiteUrl = (path = '') => `${COMPANY.siteUrl}${path}`
