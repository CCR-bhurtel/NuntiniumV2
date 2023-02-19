import React from 'react';
import { BlogType } from '../Blog/BlogItem';

export type BlogDetails = {
    blog: BlogType;
};

function Featured({ blog: { title, createdDate, author, meta, content } }: BlogDetails) {
    return (
        <div className="whiteBox absolute h-[80%] w-[275px] bg-white left-[20px] top-[0px] md:left-[57px] md:w-[400px] px-[1rem]">
            <span className="block text-xs leading-4 pt-[2rem] md:pt-[3rem] md:leading-5 md:text-xl">
                FEATURED ARTICLE
            </span>
            <span className="block text-xl py-[.7rem] leading-6 md:leading-8 md:text-2xl lg:text-[27px]">{title}</span>
            <span className="block text-xs leading-5 md:leading-6 md:text-[16px]">
                {author} . {createdDate} ({meta})
            </span>
            <span className="block text-[14px] leading-4 md:text-xl pt-[.5rem] lg:text-[20px]">{content}</span>
        </div>
    );
}

export default Featured;
