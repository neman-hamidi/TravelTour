import React from 'react'
import "./Section.css"
import SectionItem from '../SectionItem/SectionItem'

export default function Section() {
  return (
    <>
        <p className='text-center fs-2 fw-bold my-5'>چرا برای مسافرت خود باید ما را انتخاب کنید</p>
    <div className='back-img'>
        <div className='section-div'>
            <SectionItem title="سازگاری با شخصیت افراد" desc="لورم اپیسوم" src="s1.png"/>
            <SectionItem title="سازگاری با شخصیت افراد" desc="لورم اپیسوم" src="s2.png"/>
            <SectionItem title="سازگاری با شخصیت افراد" desc="لورم اپیسوم" src="s3.png"/>
            <SectionItem title="سازگاری با شخصیت افراد" desc="لورم اپیسوم" src="s4.png"/>
            <SectionItem title="سازگاری با شخصیت افراد" desc="لورم اپیسوم" src="s5.png"/>
            <SectionItem title="سازگاری با شخصیت افراد" desc="لورم اپیسوم" src="s6.png"/>
        </div>

    </div>
    </>
  )
}
