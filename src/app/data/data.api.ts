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


export const enum Gender {
   ch =  'بچگانه',
   fm = 'زنانه',
   m = 'مردانه'
}


export declare const enum ColorList {
    green =  'سبز',
    silver = 'نقره‌ای',
    gray = 'خاکستری',
    purple = 'بنفش',
    pink = 'صورتی',
    roseGold = 'رزگلد',
    darkBlue = 'سورمه‌ای',
    black = 'مشکی',
    blue = 'آبی',
    golden = 'طلایی',
    white = 'سفید'
}

export declare const enum BrandList {
    ca =  'کاسیو',
    ci = 'سیتیزن',
    ro = 'رومانسون',
    li =  'لی کوپر',
    po = 'پولو',
    di = 'دیزل',
    se = 'سکتور',
    ap = 'اپلا',
    br = 'بریسون',
    wa = 'ولدر',
    ma = 'منیجر',
    gu = 'گس'
}

export declare const enum BrandList {
    twelve =  'گارانتی 12 ماهه پوزیترون',
    eighteen = 'گارانتی 18 ماهه زمان و زیور',
    twenty_four = 'گارانتی 24 ماهه دیجیران',
}






