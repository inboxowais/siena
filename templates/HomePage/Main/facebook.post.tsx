import { useState } from "react";
import Message from "@/components/Message";
import Menu from "@/components/Menu";

import { navigation } from "@/constants/navigation";
import Icon from "@/components/Icon";
import Answer from "@/components/Answer";
import Link from "next/link";
import Field from "@/components/Field";

import PageListPage from './../../PageListPage/index'
type MainProps = {};

const FaceBookPost = ({ }: MainProps) => {
    const [message, setMessage] = useState<string>("");

    return (
        <>

            <div className="f-card">
                <div className="header">
                    <div className="options"><i className="fa fa-chevron-down"></i></div>
                    <img className="co-logo" src="http://placehold.it/40x40" />
                    <div className="text-dark"><a href="#">Lawrance Nathaniel</a></div>
                    <div className="time"><a href="#">2hrs</a> · <i className="fa fa-globe"></i></div>
                </div>
                <div>
                    <p className="text-xs">One of the perk working in an internation company is sharing knowledge with your collegues</p>
                </div>

                <div >
                    <img className="reference-thumb" src="http://placehold.it/476x249" />
                    {/* <div className="reference-content"> */}
                        {/* <div className="reference-title">A quick and simple image placeholder service. | PLACEHOLDER.it</div> */}
                        {/* <div className="reference-subtitle">How does it work? Just put your image size after our URL and you'll get a placeholder.</div> */}
                        {/* <div className="reference-font">placeholder.it</div> */}
                    {/* </div> */}
                </div>
                <div className="social">
                    <div className="social-content"></div>
                    <div className="social-buttons">
                        <span><i className="fa fa-thumbs-up"></i>Like</span>
                        <span><i className="fa fa-comment"></i>Comment</span>
                        <span><i className="fa fa-share"></i>Share</span></div>
                </div>
            </div>

            
        </>
    );
};

export default FaceBookPost;
