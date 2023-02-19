import React from 'react';
import Blog from './BlogItem';

function BlogListWithTags() {
    return (
        <div className="wraper flex flex-col md:flex-row overflow-hidden">
            <section className="section-6 flex flex-col max-w-[100vw] px-3 md:max-w-[80vw]">
                <Blog />
                <Blog />
                <Blog />
            </section>
            <section className="section-6">
                <div className="tags flex flex-col items-center justify-between md:pr-[4.5rem]">
                    <samp className="felx text-xl mt-[7px]">Tags</samp>
                    <div className="line bg-black h-[2px] w-10"></div>
                </div>
                <div className="tags list-none pt-4 grid grid-cols-2 gap-1 text-[15px] md:grid-cols-1 md:gap-4">
                    <li className="px-9 md:px-0">Technology</li>
                    <li className="px-9 md:px-0">OpenSource</li>
                    <li className="px-9 md:px-0">JavaScript</li>
                    <li className="px-9 md:px-0">Minimalism</li>
                    <li className="px-9 md:px-0">Self-help</li>
                    <li className="px-9 md:px-0">Animals</li>
                    <li className="px-9 md:px-0">Herbivores</li>
                    <li className="px-9 md:px-0">HTML</li>
                    <li className="px-9 md:px-0">CSS</li>
                    <li className="px-9 md:px-0">PHP</li>
                    <li className="px-9 md:px-0">WebTechnologies</li>
                    <li className="px-9 md:px-0">Career</li>
                    <li className="px-9 md:px-0">Life</li>
                    <li className="px-9 md:px-0">Spirituality</li>
                    <li className="px-9 md:px-0">Food</li>
                    <li className="px-9 md:px-0">Cooking</li>
                    <li className="px-9 md:px-0">Sports</li>
                    <li className="px-9 md:px-0">Racing</li>
                    <li className="px-9 md:px-0">Mountain Hiking</li>
                    <li className="px-9 md:px-0">Cruising</li>
                </div>
            </section>
        </div>
    );
}

export default BlogListWithTags;
