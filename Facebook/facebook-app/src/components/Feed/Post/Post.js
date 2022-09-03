import React from "react";
import './Post.css'

import { Avatar } from '@material-ui/core';
import { ThumbUp, ChatBubbleOutline, AccountCircle, NearMe, ExpandMoreOutlined } from '@material-ui/icons';

const Post = ({profilePic, image, username, timestamp, message}) => {
    return(
        <div className='post'>
            <div className="postTop">
                <Avatar src={profilePic} className="postAvatar" />

                <div className="postTopInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString}</p>
                </div>
            </div>
            <div className="postBottom">
                <p>{message}</p>
            </div>
            <div className="postImage">
                <img src={image}/>
            </div>
            <div className="postOptions">
                <div className="postOption">
                    <ThumbUp/>
                    <p>Gostei</p>
                </div>
                <div className="postOption">
                    <ChatBubbleOutline/>
                    <p>Comentários</p>
                </div>
                <div className="postOption">
                    <NearMe/>
                    <p>Compartilhar</p>
                </div>
                <div className="postOption">
                    <AccountCircle/>
                    <ExpandMoreOutlined/>
                </div>
            </div> {/*postOptions*/}
        </div>
    )
}

export default Post;