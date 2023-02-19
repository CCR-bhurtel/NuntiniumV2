import React, { useState } from 'react';
import Featured from '../Featured';
import { BlogType } from '../Blog/BlogItem';

function HomeHero() {
    const [blog, setBlog] = useState<BlogType>({
        title: ' World’s Most Dangerous Technology Ever Made.',
        author: 'Ralph Hawkins',
        createdDate: 'May 7, 2019',
        meta: '10 mins read',
        content: ` Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea
        minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim.
        Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.`,
    });
    return (
        <section className="section-2 relative px-2">
            <div className="image max-w-[100vw] h-[25rem] md:h-[35rem]"></div>
            <Featured blog={blog} />
        </section>
    );
}

export default HomeHero;
