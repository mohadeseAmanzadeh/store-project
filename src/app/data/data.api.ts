export interface SorterListInterface {
	sortTitle: string,
    type: string,
    active: boolean,
    id: number
}


export interface WatchListInterface {
	title: string,
    brandId: string,
    pageColor: string,
    model: string,
    id: string,
    price: string,
    img: string,
}


export const GenderList: any = {
   1 : 'بچگانه',
   2 : 'زنانه',
   3 : 'مردانه'
}


export const ColorList: any = {
    1 :  'سبز',
    2 : 'نقره‌ای',
    3 : 'خاکستری',
    4 : 'بنفش',
    5 : 'صورتی',
    6 : 'رزگلد',
    7 : 'سورمه‌ای',
    8 : 'مشکی',
    9 : 'آبی',
    10 : 'طلایی',
    11 : 'سفید'
}

export const BrandList: any =  {
    1 :  'کاسیو',
    2 : 'سیتیزن',
    3 : 'رومانسون',
    4 :  'لی کوپر',
    5 : 'پولو',
    6 : 'دیزل',
    7 : 'سکتور',
    8 : 'اپلا',
    9 : 'بریسون',
    10 : 'ولدر',
    11 : 'منیجر',
    12 : 'گس'
}

export const WarrantyList: any = {
    3 :  'گارانتی 12 ماهه پوزیترون',
    2 : 'گارانتی 18 ماهه زمان و زیور',
    1 : 'گارانتی 24 ماهه دیجیران',
}


export const OriginalityList: any = {
    1: 'ژاپن',
}





