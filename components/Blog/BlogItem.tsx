import React from 'react';

export type BlogType = {
    title: string;
    createdDate: string;
    author: string;
    meta: string;
    content: string;
};
function BlogItem() {
    const randomNum = Math.ceil(Math.random() * 5);
    return (
        <div className="article1 flex flex-col max-w-[100rem] my-[.5rem] items-center md:flex-row md:max-w-[100%] md:justify-center">
            <div
                className={`image${randomNum} h-[13rem] w-[15rem] my-[.5rem] md:h-[15rem] md:w-[20rem] md:mr-[1rem]`}
            ></div>
            <div className="whiteBox text-center px-10 md:w-[60%] md:pl-[0px] md:text-start md:px-[0] md:h-[15rem] md:ml-[1rem]">
                <span className="block text-xs pt-[.5rem] leading-4 md:pt-[0px] md:text-[14px]">MINIMALISM</span>
                <span className="md:text-2xl block text-xl leading-6 md:leading-7 py-[.5rem] lg:text-[27px]">
                    Culpa sit Laboris Exercitation ea Fugiat
                </span>
                <span className="block text-[14px] leading-5 md:leading-6">
                    Leslie Pena . April 25, 2012 (6 mins read)
                </span>
                <span className="block text-[18px] leading-[20px] pt-[.3rem] lg:text-[20px] lg:leading-[23px]">
                    Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt.
                    Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute
                    exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et
                    esse..
                </span>
            </div>
        </div>
    );
}

export default BlogItem;
