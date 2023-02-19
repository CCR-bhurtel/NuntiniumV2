import { Props } from 'next/script';
import React, { ReactElement } from 'react';

export const LoginForm: React.FC<Props> = (props) => {
    return (
        <div className="wraper flex felx-col w-full justify-center pt-[3.5rem] md:pt-[5rem]">
            <section className="section2 login box-border flex flex-col items-center justify-center gap-2 w-max p-4 border-[1px] border-gray-200 rounded-xl shadow-md shadow-gray-400">
                <div>
                    <span className="text-3xl font-bold">Welcome back!</span>
                </div>
                <div>
                    <span className="text-[14px]">Sign in to get the most out of nuntium.</span>
                </div>
                <div>
                    <input
                        className="w-[17.5rem] h-[2.5rem] bg-[#F8F8F8] p-3 rounded-[4px] placeholder-gray-500 outline-none"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                    />
                </div>
                <div>
                    <input
                        className="w-[17.5rem] h-[2.5rem] bg-[#F8F8F8] p-3 rounded-[4px] placeholder-gray-500 outline-none"
                        type="password"
                        name="Password"
                        id="Password"
                        placeholder="Password"
                    />
                </div>
                <div className="flex felx-row space-x-20">
                    <div className="remember flex flex-row gap-1 items-center">
                        <input type="checkbox" name="RememberMe" id="RememberMe" className="flex accent-gray-500" />
                        <span className="text-xs text-gray-500">Remember me</span>
                    </div>
                    <div className="ForgotPassword">
                        <a href="#" className="text-xs text-gray-500">
                            Forgot Password?
                        </a>
                    </div>
                </div>
                <div>
                    <button className="border-[1px] border-black w-[17.5rem] py-[.6rem] rounded-[10px]">Login</button>
                </div>
            </section>
        </div>
    );
};
